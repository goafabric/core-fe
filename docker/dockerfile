# Use the official Nginx base image
FROM nginx:1.25.3

# Create a directory for your static files
RUN mkdir /usr/share/nginx/html/frontend

# Copy the contents of the /public folder to the Nginx HTML directory
#COPY ./docker/node_modules/@goafabric/core-fe/src/public /usr/share/nginx/html/frontend
COPY ./src/public /usr/share/nginx/html/frontend

RUN sed -i 's/const devMode = true;/const devMode = false;/g' /usr/share/nginx/html/frontend/properties.js
RUN sed -i 's/const mockMode = true;/const mockMode = false;/g' /usr/share/nginx/html/frontend/properties.js

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx in the foreground
#CMD ["nginx", "-g", "daemon off;"]