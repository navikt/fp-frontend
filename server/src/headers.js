export const setup = (app) => {
  app.disable("x-powered-by");
  app.use((req, res, next) => {
    res.header("X-Content-Type-Options", "nosniff");
    res.header("X-Xss-Protection", "1; mode=block");
    res.header("X-Frame-Options", "DENY");
    res.header("Referrer-Policy", "origin");
    res.header("Strict-Transport-Security", "max-age=31536000")

    res.header("Feature-Policy", "geolocation 'none'; microphone 'none'; camera 'none'");
    if (process.env.NODE_ENV === "development") {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "GET, POST");
    }
    next();
  });
};
