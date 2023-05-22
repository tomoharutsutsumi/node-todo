FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /node-todo

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production
 
COPY . .

RUN npm install express ejs mongoose
RUN npm install -g ts-node
RUN npm install -D typescript @types/node @types/express 

CMD ["npm", "start"]


