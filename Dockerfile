FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production
 
COPY . .

RUN npm install typescript --save-dev
RUN npm install ronin-server ronin-mocks --production
RUN npm install ronin-database --production
RUN npm install express

CMD ["node", "server.js"]

