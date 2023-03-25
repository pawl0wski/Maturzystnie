FROM node:18-alpine

WORKDIR /maturzystnie
COPY . /maturzystnie

RUN npm i
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
