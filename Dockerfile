FROM navikt/node-express:16
ENV TZ="Europe/Oslo"
USER root
WORKDIR /app
COPY dist /app/
COPY server /app
RUN npm i

EXPOSE 9090
