#base location
FROM node:16.20.1

# Create a volume in the container
VOLUME /src

WORKDIR /usr/app

COPY ./package.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ]