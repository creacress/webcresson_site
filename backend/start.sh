#!/bin/bash
# Appliquer les migrations
flask db upgrade

# Démarrer l'application avec Gunicorn
exec gunicorn --bind 0.0.0.0:5000 "app:create_app()"
