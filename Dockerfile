FROM node:11-alpine

RUN mkdir -p /usr/src/app
ENV HOME /usr/src/app
WORKDIR $HOME

COPY package*.json ./

RUN npm install

COPY . $HOME

EXPOSE 3000
CMD [ "npm", "start" ]
