FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production
 
COPY . .

RUN npm install express ejs 
RUN npm install -D typescript ts-node @types/node @types/express 

CMD ["node", "server.js"]

