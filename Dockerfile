FROM gcr.io/distroless/nodejs22-debian12

LABEL org.opencontainers.image.source=https://github.com/navikt/fp-frontend
ENV TZ="Europe/Oslo"
ENV NODE_ENV production

WORKDIR /app

# ARG with default value
ARG APP_NAME=fp-frontend
ENV APP_NAME=${APP_NAME}

COPY server /app
COPY ./apps/${APP_NAME}/dist /app/public

EXPOSE 8080
CMD ["dist/server.js"]
