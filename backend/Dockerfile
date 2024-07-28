# Utiliser une image Python officielle pour le backend
FROM python:3.9

# Définir le répertoire de travail
WORKDIR /app

# Copier requirements.txt et installer les dépendances
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copier le reste des fichiers de l'application
COPY . .

# Copier le script de démarrage
COPY start.sh .

# Donner les permissions d'exécution au script
RUN chmod +x start.sh

# Exposer le port 5000
EXPOSE 5000

# Commande pour démarrer l'application
CMD ["./start.sh"]
