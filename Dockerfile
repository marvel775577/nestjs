FROM node:15-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i -g @nestjs/cli
RUN npm install

COPY . .

CMD ["npm", " run start:dev"]
