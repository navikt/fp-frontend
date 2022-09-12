FROM navikt/node-express:16
USER root
WORKDIR /app
COPY dist /app/fpsak/
COPY server /app
RUN npm i

EXPOSE 9090
