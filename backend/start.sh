#!/bin/bash

# Afficher les fichiers et répertoires actuels pour débogage
echo "Contenu du répertoire /app :"
ls -la /app

# Supprimer le dossier migrations s'il existe
if [ -d "migrations" ]; then
  rm -rf migrations
  echo "Dossier migrations supprimé."
fi

# Initialiser les migrations
echo "Initialisation des migrations..."
flask db init
flask db migrate -m "Initial migration"

# Appliquer les migrations
flask db upgrade

# Afficher les fichiers et répertoires actuels pour débogage après la création des migrations
echo "Contenu du répertoire /app après création des migrations:"
ls -la /app

# Démarrer l'application avec Gunicorn
exec gunicorn --bind 0.0.0.0:5000 wsgi:app
