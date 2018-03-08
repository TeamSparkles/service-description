FROM node:9.6.1

RUN mkdir -p /src/service-description

WORKDIR /src/service-description

COPY package.json /src/service-description

RUN npm install

COPY . /src/service-description

EXPOSE 4000

CMD [ "npm", "run",  "docker" ]