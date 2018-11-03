FROM node:9

RUN mkdir -p /usr

WORKDIR /usr

COPY . /usr

EXPOSE 8080

RUN npm install

CMD ["npm", "start"]