FROM node:14-alpine as base

WORKDIR /
COPY package*.json /
EXPOSE 6000


FROM base as dev
ENV NODE_ENV=development

RUN npm install 

COPY . .

CMD ["npm","dev"]