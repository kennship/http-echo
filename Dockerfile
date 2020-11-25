FROM node:15.3.0-alpine3.12
COPY . /app
WORKDIR /app
RUN npm install
CMD npm start
