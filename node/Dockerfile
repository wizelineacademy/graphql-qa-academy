############################################################
# Dockerfile para configurar aplicación en node.js - Express
############################################################

# Establece la imagen base
FROM node

# Instalación de Nodemon en forma Global
# Al realizarse cambios reiniciar el servidor
RUN npm install nodemon -g --quiet

# Expone la aplicación en el puerto 8000
EXPOSE 8000

# Inicia la aplicación al iniciar al contenedor
CMD cd /opt/app npm i --quiet && nodemon -L --watch . index.js
