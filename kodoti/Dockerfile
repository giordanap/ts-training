# descargar node
FROM node:16

# crear la carpeta app
WORKDIR /app

# copiar los archivos
COPY package*.json ./

# instalarlos
RUN npm install

# copiar los archivos fuente
COPY . .

# ejecutas el proyecto
CMD [ "npm", "start" ]