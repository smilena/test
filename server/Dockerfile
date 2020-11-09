FROM node:10.16.0
RUN mkdir /app
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . /app/
EXPOSE 3000
CMD [ "node", "./api/index.js" ]