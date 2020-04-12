FROM node:10

WORKDIR /app/event

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3696

CMD [ "node", "server.js" ]
