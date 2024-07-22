# Étape de construction
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape finale
FROM nginx:alpine

# Copier la configuration de site personnalisée
COPY default.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers construits à partir de l'étape de construction
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
