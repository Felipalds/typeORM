FROM node:16

WORKDIR /home/luizfelipefonsecarosa/github/typeORM

COPY . .

EXPOSE 6002

CMD ["node", "build/index.js"]