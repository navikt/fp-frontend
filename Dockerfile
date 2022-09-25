FROM navikt/node-express:16

ENV TZ="Europe/Oslo"
LABEL org.opencontainers.image.source=https://github.com/navikt/fp-frontend

USER root
WORKDIR /app
COPY dist ./
COPY server ./
RUN npm i

EXPOSE 8080
