import { Express } from "express";

export const addHeaders = (app: Express) => {
  app.disable("x-powered-by");
  app.use((_, response, next) => {
    response.header("X-Content-Type-Options", "nosniff");
    response.header("X-Xss-Protection", "1; mode=block");
    response.header("X-Frame-Options", "DENY");
    response.header("Referrer-Policy", "origin");
    response.header("Strict-Transport-Security", "max-age=31536000");
    response.header(
      "Feature-Policy",
      "geolocation 'none'; microphone 'none'; camera 'none'",
    );
    next();
  });
};
