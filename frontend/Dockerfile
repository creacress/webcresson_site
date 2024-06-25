# Utiliser une image Node officielle pour le build
FROM node:14 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration du projet
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# Construire l'application React
RUN npm run build

# Utiliser une image Nginx officielle pour servir l'application
FROM nginx:alpine

# Copier les fichiers construits dans le répertoire de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copier la configuration de site personnalisée
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port 80 pour le serveur Nginx
EXPOSE 80

# Commande pour lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
