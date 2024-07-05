#!/bin/bash

# Vérifier si le dossier migrations existe, sinon l'initialiser
if [ ! -d "migrations" ]; then
  flask db init
  flask db migrate -m "Initial migration"
fi

# Appliquer les migrations
flask db upgrade

# Démarrer l'application avec Gunicorn
exec gunicorn --bind 0.0.0.0:5000 wsgi:app
