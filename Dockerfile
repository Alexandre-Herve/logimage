FROM mhart/alpine-node:6.5
RUN mkdir /app
WORKDIR /app

RUN npm install -g yarn
RUN yarn global add nodemon typescript@2.1 tslint mocha

ADD ./package.json .
ADD ./yarn.lock .

RUN yarn install
