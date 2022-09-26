export const setup = (app) => {
  app.disable("x-powered-by");
  app.use((req, res, next) => {
    res.header("X-Content-Type-Options", "nosniff");
    res.header("X-Xss-Protection", "1; mode=block");
    res.header("X-Frame-Options", "DENY");
    res.header("Referrer-Policy", "origin");
    res.header("Strict-Transport-Security", "max-age=31536000")
    res.header("Feature-Policy", "geolocation 'none'; microphone 'none'; camera 'none'");
    next();
  });
};
