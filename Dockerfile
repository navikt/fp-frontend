FROM gcr.io/distroless/nodejs22-debian12

LABEL org.opencontainers.image.source=https://github.com/navikt/fp-frontend
ENV TZ="Europe/Oslo"
ENV NODE_ENV production

WORKDIR /app

COPY server /app
COPY ./apps/fp-frontend-app/dist /app/public

EXPOSE 8080
CMD ["dist/server.js"]
