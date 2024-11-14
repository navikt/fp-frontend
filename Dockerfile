FROM gcr.io/distroless/nodejs22-debian12

LABEL org.opencontainers.image.source=https://github.com/navikt/fp-frontend
ENV TZ="Europe/Oslo"
ENV NODE_ENV production

WORKDIR /app

COPY ./apps/fp-frontend-app/dist ./
COPY server/dist ./

EXPOSE 8080
CMD ["./index.js"]
