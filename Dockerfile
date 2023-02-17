FROM node:18-alpine
LABEL org.opencontainers.image.source=https://github.com/navikt/fp-frontend
ENV TZ="Europe/Oslo"

RUN wget -O /dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.2.5/dumb-init_1.2.5_x86_64
RUN chmod +x /dumb-init

WORKDIR /app

COPY ./apps/fp-frontend-app/dist ./dist
COPY server ./

USER node
EXPOSE 8080
ENTRYPOINT ["/dumb-init", "--", "node", "./server.js"]
