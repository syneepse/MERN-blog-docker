FROM node:20

WORKDIR /index

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

EXPOSE 4000


CMD ["node","index.js"]