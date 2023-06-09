FROM node:alpine

ENV PORT 3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN npm i

COPY . /usr/src/app

RUN npm run build
EXPOSE 3000

CMD "npm" "run" "dev"