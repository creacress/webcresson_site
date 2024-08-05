import os
import json
import logging
import warnings
import requests
import subprocess
import numpy as np
import pandas as pd
import mlflow
import mlflow.pyfunc
import shutil
from flask import Flask, request, jsonify, session, redirect, url_for, render_template
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from dotenv import load_dotenv
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.firefox.service import Service as FirefoxService
from selenium.webdriver.edge.service import Service as EdgeService
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.firefox import GeckoDriverManager
from webdriver_manager.microsoft import EdgeChromiumDriverManager
from urllib3.exceptions import InsecureRequestWarning

warnings.simplefilter('ignore', InsecureRequestWarning)

# Charger les variables d'environnement
load_dotenv()

# Configuration de base
logging.basicConfig(level=logging.INFO)

db = SQLAlchemy()
instances = {}

def create_app():
    app = Flask(__name__, template_folder='backend/templates')

    # Configurer CORS pour accepter les requêtes depuis webcresson.com
    CORS(app, resources={r"/*": {"origins": "https://webcresson.com"}}, supports_credentials=True)

    # Configurer la base de données
    database_uri = os.getenv('DATABASE_URI')
    if not database_uri:
        raise ValueError("No DATABASE_URI provided in .env file")
    
    app.config['SQLALCHEMY_DATABASE_URI'] = database_uri
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    migrate = Migrate(app, db)

    class ContactMessage(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        name = db.Column(db.String(80), nullable=False)
        email = db.Column(db.String(120), nullable=False)
        service = db.Column(db.String(120), nullable=False)
        message = db.Column(db.Text, nullable=False)

    # Configurer la clé secrète à partir des variables d'environnement
    app.secret_key = os.getenv('SECRET_KEY')

    @app.route('/')
    def home():
        return jsonify({"message": "Welcome to WebCressonTech API!"}), 200

    @app.route('/grant-access', methods=['POST'])
    def grant_access():
        session['access_granted'] = True
        return jsonify({"status": "success"}), 200

    @app.route('/api/check-access')
    def check_access():
        if session.get('access_granted'):
            return jsonify({"access": True}), 200
        else:
            return jsonify({"access": False}), 403
    
    @app.route('/api/contact', methods=['POST'])
    def contact():
        data = request.get_json()
        
        name = data.get('name')
        email = data.get('email')
        service = data.get('service')
        message = data.get('message')
        
        if not all([name, email, service, message]):
            return jsonify({'message': 'All fields are required!'}), 400
        
        # Simuler un traitement, comme l'envoi d'un email ou la sauvegarde dans une base de données.
        print(f"Received contact form submission: {data}")
        
        return jsonify({'message': 'Your message has been received!'}), 200

    @app.route('/intelligence-section')
    def intelligence_section():
        if session.get('access_granted'):
            return render_template('index.html')  # Render your React app
        else:
            return render_template('403.html'), 403  # Render your custom 403 template

    def detect_browser(user_agent):
        if 'chrome' in user_agent.lower():
            return 'chrome'
        elif 'firefox' in user_agent.lower():
            return 'firefox'
        elif 'edg' in user_agent.lower():
            return 'edge'
        elif 'duckduckgo' in user_agent.lower():
            return 'duckduckgo'
        elif 'safari' in user_agent.lower() and 'chrome' not in user_agent.lower():
            return 'safari'
        else:
            return 'unknown'

    def clear_wdm_cache():
        cache_dir = os.path.expanduser("~/.wdm")
        if os.path.exists(cache_dir):
            shutil.rmtree(cache_dir)

    def get_webdriver(browser):
        options = {
            'chrome': webdriver.ChromeOptions(),
            'firefox': webdriver.FirefoxOptions(),
            'edge': webdriver.EdgeOptions()
        }
        
        for opt in options.values():
            opt.add_argument('--ignore-certificate-errors')
            opt.add_argument('--ignore-ssl-errors')
            opt.add_argument('--disable-gpu')
            opt.add_argument('--no-sandbox')
            opt.add_argument('--disable-dev-shm-usage')
            opt.add_argument('--allow-insecure-localhost')
            opt.add_argument('--disable-web-security')
            opt.add_argument('--disable-extensions')
            opt.add_argument('--start-maximized')

        if browser == 'chrome':
            chrome_driver_path = ChromeDriverManager().install()
            service = ChromeService(executable_path=chrome_driver_path)
            driver = webdriver.Chrome(service=service, options=options['chrome'])
        elif browser == 'firefox':
            service = FirefoxService(GeckoDriverManager().install())
            driver = webdriver.Firefox(service=service, options=options['firefox'])
        elif browser == 'edge':
            service = EdgeService(EdgeChromiumDriverManager().install())
            driver = webdriver.Edge(service=service, options=options['edge'])
        else:
            raise ValueError("Unsupported browser")
        return driver

    @app.route('/api/start-instance', methods=['POST'])
    def start_instance():
        try:
            data = request.get_json()
            if not data or 'url' not in data:
                raise ValueError("URL is required")

            url = data['url']
            user_agent = request.headers.get('User-Agent')
            browser = detect_browser(user_agent)
            driver = get_webdriver(browser)
            
            driver.get(url)

            instance_id = len(instances) + 1
            instances[instance_id] = driver

            return jsonify({'status': 'success', 'instanceId': instance_id}), 200
        except Exception as e:
            logging.error("Error in start_instance: %s", e)
            return jsonify({'status': 'error', 'message': str(e)}), 500

    # Utilisation du modèle MLflow pour classifier les cookies
    mlflow_model_uri = 'models:/Analyst_Cookies_V_0/1'
    logging.info("MLflow Model URI: %s", mlflow_model_uri)

    # Configurer l'URI de suivi de MLflow
    mlflow_tracking_uri = os.getenv('MLFLOW_TRACKING_URI', 'http://127.0.0.1:5002')
    mlflow.set_tracking_uri(mlflow_tracking_uri)
    logging.info("MLflow Tracking URI: %s", mlflow_tracking_uri)

    # Installer les dépendances du modèle
    try:
        dependencies_file = mlflow.pyfunc.get_model_dependencies(mlflow_model_uri)
        subprocess.run(['pip', 'install', '-r', dependencies_file], check=True)
    except Exception as e:
        logging.error("Error installing dependencies: %s", e)
        raise

    def classify_cookie_with_mlflow(cookie):
        try:
            model = mlflow.pyfunc.load_model(mlflow_model_uri)
            # Convertir les valeurs appropriées en numériques ou booléennes
            expiry = cookie.get('expiry', np.nan)
            secure = bool(cookie.get('secure', False))
            http_secure = bool(secure)
            http_only = bool(cookie.get('httpOnly', False))
            combined = f"{cookie['name']} {cookie.get('value', '')} {cookie.get('domain', '')} {cookie.get('path', '')}"
            data = pd.DataFrame([{
                'Combined': combined,
                'HttpOnly': http_only,
                'Secure': secure,
                'HttpSecure': str(http_only) + str(secure)
            }])
            data['HttpOnly'] = data['HttpOnly'].astype(bool)
            data['Secure'] = data['Secure'].astype(bool)
            data['HttpSecure'] = data['HttpSecure'].astype(str)
            classification = model.predict(data)
            return classification[0]
        except Exception as e:
            logging.error("Error loading MLflow model: %s", e)
            raise

    @app.route('/api/extract-cookies', methods=['POST'])
    def extract_cookies():
        try:
            data = request.get_json()
            if not data or 'instanceId' not in data:
                raise ValueError("Instance ID is required")

            instance_id = data['instanceId']
            if instance_id not in instances:
                raise ValueError("Invalid Instance ID")

            driver = instances.pop(instance_id, None)
            if driver is None:
                raise ValueError("Driver instance not found")

            cookies = driver.get_cookies()
            driver.quit()

            cookie_details = []
            danger_summary = {
                'Élevée': 0,
                'Moyenne': 0,
                'Faible': 0
            }

            dangerous_cookies = {
                'Suivi/Publicité': {
                    'description': 'Ce cookie suit vos activités sur plusieurs sites Web.',
                    'danger': 'Élevée'
                },
                'Fonctionnel': {
                    'description': 'Ce cookie est utilisé pour des fonctionnalités essentielles du site.',
                    'danger': 'Faible'
                },
                'Persistant': {
                    'description': 'Ce cookie est utilisé pour se souvenir de vous lors de futures visites.',
                    'danger': 'Moyenne'
                },
                'Non-Classifié': {
                    'description': 'Ce cookie n\'a pas été classifié.',
                    'danger': 'Faible'
                }
            }

            for cookie in cookies:
                category = classify_cookie_with_mlflow(cookie)
                if category not in dangerous_cookies:
                    logging.error("Unknown category predicted: %s", category)
                    return jsonify({'status': 'error', 'message': f"Unknown category predicted: {category}"}), 500

                cookie_info = {
                    'name': cookie['name'],
                    'value': cookie['value'],
                    'domain': cookie['domain'],
                    'path': cookie['path'],
                    'expiry': cookie.get('expiry', None),
                    'secure': bool(cookie.get('secure', False)),
                    'HttpSecure': bool(cookie.get('secure', False)),
                    'HttpOnly': bool(cookie.get('httpOnly', False)),
                    'Combined': f"{cookie['name']} {cookie.get('value', '')} {cookie['domain']} {cookie['path']}",
                    'description': dangerous_cookies[category]['description'],
                    'danger': dangerous_cookies[category]['danger']
                }
                danger_summary[dangerous_cookies[category]['danger']] += 1
                cookie_details.append(cookie_info)

            response_data = {
                'status': 'success',
                'cookies': cookie_details,
                'summary': danger_summary
            }
            response_json = json.dumps(response_data, default=lambda x: None if isinstance(x, float) and np.isnan(x) else x)

            return response_json, 200, {'Content-Type': 'application/json'}
        except Exception as e:
            logging.error("Error in extract_cookies: %s", e)
            return jsonify({'status': 'error', 'message': str(e)}), 500

    return app

if __name__ == '__main__':
    app = create_app()
    with app.app_context():
        db.create_all()
    app.run(debug=True, host='0.0.0.0', port=5000)
