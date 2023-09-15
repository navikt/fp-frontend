FROM gcr.io/distroless/nodejs18-debian11:nonroot

LABEL org.opencontainers.image.source=https://github.com/navikt/fp-frontend
ENV TZ="Europe/Oslo"
ENV NODE_ENV production

WORKDIR /app

COPY ./apps/fp-frontend-app/dist ./dist
COPY server ./

EXPOSE 8080
CMD ["./server.js"]
