FROM node:24-alpine3.21

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma

EXPOSE 3000

RUN npx prisma generate 


CMD ["npm", "run", "start:dev"]
