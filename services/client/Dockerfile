FROM node:12-alpine as build

WORKDIR /app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install --production --silent && mv node_modules ../

RUN npm install react-scripts@4.0.0 -g --silent

COPY . .

EXPOSE 3000

CMD npm start