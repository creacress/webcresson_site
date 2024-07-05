#!/bin/bash

# Afficher les fichiers et répertoires actuels pour débogage
echo "Contenu du répertoire /app :"
ls -la /app

# Vérifier si le dossier migrations existe, sinon l'initialiser
if [ ! -d "migrations" ]; then
  echo "Dossier migrations non trouvé, initialisation..."
  flask db init
  flask db migrate -m "Initial migration"
else
  echo "Dossier migrations trouvé, pas besoin d'initialisation."
fi

# Appliquer les migrations
flask db upgrade

# Démarrer l'application avec Gunicorn
exec gunicorn --bind 0.0.0.0:5000 wsgi:app
