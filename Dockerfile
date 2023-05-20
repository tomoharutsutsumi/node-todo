FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production
 
COPY . .

RUN npm install ejs --save
RUN npm install express --save
RUN npm install --save-dev typescript
RUN npm install --save-dev @types/express @types/node 

CMD ["node", "server.js"]

