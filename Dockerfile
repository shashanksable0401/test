FROM node:10-stretch-slim as client-builder
RUN apt-get update
RUN apt-get -y install nginx
RUN nginx -v

# Build React Webapp
WORKDIR /app
COPY ./package.json /app
COPY ./tsconfig.json /app
RUN npm install && npm cache clean --force
COPY ./config-overrides.js /app/config-overrides.js
COPY ./public /app/public
COPY ./src /app/src
COPY ./start.sh /app/start.sh
COPY nginx.conf /etc/nginx/nginx.conf

RUN npm run build
RUN cp -r ./build/. /usr/share/nginx/html/

WORKDIR /app
EXPOSE 8080
CMD sh start.sh
