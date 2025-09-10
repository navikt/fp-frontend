FROM gcr.io/distroless/nodejs22-debian12

LABEL org.opencontainers.image.source=https://github.com/navikt/fp-frontend
ENV TZ="Europe/Oslo"
ENV NODE_ENV production

WORKDIR /app

# Bruk ARG til å bestemme kva app som skal kopierast
ARG APP_NAME

COPY server /app
COPY ./apps/${APP_NAME}/dist /app/public

EXPOSE 8080
CMD ["dist/server.js"]
