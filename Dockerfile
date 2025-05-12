FROM node:20.10-slim

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

EXPOSE 6999

CMD ["node", "app.js"]
