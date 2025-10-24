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

#! Achtung package.json anpassen!:
#   "scripts": {
#   "dev": "vite --host"
# }

#! Achtung für Hot Reload (windows) vite.config anpassen 😒
#  server: {
#     watch: {
#       usePolling: true,
#     },
#     host: "0.0.0.0",
#     port: 5173,
#   },