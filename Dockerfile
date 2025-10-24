# Ziel: Entwicklungsumgebung=Docker; Änderungen live im Browser sehen

FROM node:22

WORKDIR /app

# COPY . .
COPY package*.json ./
RUN npm install

CMD ["npm", "run", "dev"]

EXPOSE 5173

# docker build -t adding_dockervolumes .

# Terminal
# docker-compose build
# docker-compose up

# Achtung package.json anpassen!:
#   "scripts": {
#   "dev": "vite --host"
# }
