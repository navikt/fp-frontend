FROM node:16-alpine

LABEL org.opencontainers.image.source=https://github.com/navikt/fp-frontend
ENV TZ="Europe/Oslo"

WORKDIR /usr/src/app

COPY server ./
COPY dist ./

RUN npm i

EXPOSE 8080
