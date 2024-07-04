# Utiliser une image Python officielle pour le backend
FROM python:3.9

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers requirements.txt et installer les dépendances
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copier le reste des fichiers du projet
COPY . .

# Exposer le port 5000 pour le backend
EXPOSE 5000

# Commande pour lancer gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]
