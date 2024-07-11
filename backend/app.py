import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from dotenv import load_dotenv
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Load environment variables from .env file
load_dotenv()

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    CORS(app)

    # Configure SQLAlchemy with the database URI
    database_uri = os.getenv('DATABASE_URI')
    if not database_uri:
        raise ValueError("No DATABASE_URI provided in .env file")
    
    print(f"Using DATABASE_URI: {database_uri}")  # Ajouté pour le débogage

    app.config['SQLALCHEMY_DATABASE_URI'] = database_uri
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    migrate = Migrate(app, db)  # Initialiser Flask-Migrate

    class ContactMessage(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        name = db.Column(db.String(80), nullable=False)
        email = db.Column(db.String(120), nullable=False)
        service = db.Column(db.String(120), nullable=False)
        message = db.Column(db.Text, nullable=False)

    @app.route('/')
    def home():
        return jsonify({"message": "Welcome to WebCressonTech API!"}), 200

    @app.route('/contact', methods=['POST'])
    def contact():
        try:
            data = request.get_json()
            if not data:
                raise ValueError("No data provided")
            
            print("Received data:", data)
            
            name = data.get('name')
            email = data.get('email')
            service = data.get('service')
            message = data.get('message')

            if not all([name, email, service, message]):
                raise ValueError("Missing fields in data")

            new_message = ContactMessage(name=name, email=email, service=service, message=message)
            db.session.add(new_message)
            db.session.commit()

            # Send email notification
            send_email_notification(name, email, service, message)

            response = {
                'status': 'success',
                'message': 'Thank you for your message. We will get back to you soon.'
            }
            return jsonify(response), 200
        except ValueError as e:
            print("ValueError:", e)
            return jsonify({'status': 'error', 'message': str(e)}), 400
        except Exception as e:
            print("Exception:", e)
            print("Error details:", e.__class__.__name__, str(e))
            return jsonify({'status': 'error', 'message': 'Internal Server Error'}), 500

    def send_email_notification(name, email, service, message):
        sender_email = os.getenv('EMAIL_USER')
        receiver_email = os.getenv('RECEIVER_EMAIL')
        password = os.getenv('EMAIL_PASS')
        smtp_server = os.getenv('SMTP_SERVER')
        smtp_port = os.getenv('SMTP_PORT')

        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = receiver_email
        msg['Subject'] = "New Contact Form Submission"

        body = f"Name: {name}\nEmail: {email}\nService: {service}\nMessage: {message}"
        msg.attach(MIMEText(body, 'plain'))

        try:
            server = smtplib.SMTP_SSL(smtp_server, smtp_port)
            server.login(sender_email, password)
            text = msg.as_string()
            server.sendmail(sender_email, receiver_email, text)
            server.quit()
            print("Email sent successfully")
        except Exception as e:
            print(f"Failed to send email: {e}")

    return app

if __name__ == '__main__':
    app = create_app()
    with app.app_context():
        db.create_all()
    app.run(debug=True, host='0.0.0.0', port=5000)
