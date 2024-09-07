FROM node:12-alpine as build

WORKDIR /app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install --production --silent && mv node_modules ../

COPY . .

EXPOSE 3010

RUN npm install -g nodemon

CMD npm start