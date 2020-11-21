FROM node:12.18.3

WORKDIR /code

COPY package.json /code/package.json
COPY yarn.lock /code/yarn.lock

RUN npm install

COPY . /code

EXPOSE 5000

CMD ["npm", "run", "start"]