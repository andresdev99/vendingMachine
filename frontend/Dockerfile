FROM node:18-alpine

WORKDIR /usr/src/frontend

COPY package.json .

COPY package-lock.json .

RUN npm install

RUN npm install axios

# RUN npm install react-scripts@5.0.1 -g --silent

COPY . .

RUN npm run build

CMD ["npm", "run", "dev"]