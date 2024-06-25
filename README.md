# Webcresson Site - Consulting Data Engineering

Ce projet est le site web de mon entreprise de consulting en Data Engineering. Il est développé avec React pour le frontend et Python Flask pour le backend. L'hébergement est géré via Docker.

## Table des matières
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du Projet](#structure-du-projet)
- [Contributions](#contributions)
- [License](#license)

## Prérequis
- Docker
- Docker Compose

## Installation

Clonez le dépôt:
```bash
git clone https://github.com/creacress/webcresson_site.git
cd webcresson_site
```

Construisez et lancez les conteneurs Docker:
```bash
docker-compose up --build
```

## Utilisation

Accédez au site web via l'URL suivante:
```
https://webcresson.com
```

## Structure du Projet
- `frontend/` : Contient le code source React.
- `backend/` : Contient le code source Flask.
- `docker-compose.yml` : Fichier de configuration pour Docker Compose.

## Contributions
Les contributions sont les bienvenues ! Pour contribuer, veuillez suivre ces étapes:
1. Fork le projet.
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`).
3. Commitez vos changements (`git commit -m 'Add some AmazingFeature'`).
4. Pushez vers la branche (`git push origin feature/AmazingFeature`).
5. Ouvrez une Pull Request.

## License
Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
