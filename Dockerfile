FROM node:lts-alpine AS builder
WORKDIR /app

COPY . /app

RUN npm i --registry=https://registry.npm.taobao.org && npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html

ADD default.conf /etc/nginx/conf.d/

EXPOSE 80

WORKDIR /usr/share/nginx/html

RUN chmod -R a+rx *
