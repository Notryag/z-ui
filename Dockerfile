FROM node:lts-alpine AS builder
WORKDIR /app

ADD package.json /app
RUN npm install --production --registry=https://registry.npm.taobao.org

COPY . /app

RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html

ADD default.conf /etc/nginx/conf.d/

EXPOSE 80

WORKDIR /usr/share/nginx/html

RUN chmod -R a+rx *
