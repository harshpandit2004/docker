FROM node:17-alpine

WORKDIR /app

COPY . . 

RUN npm install

EXPOSE 9000

CMD ["nodemon", "app.js"]