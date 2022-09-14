import redis from 'redis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import config from './config.js';
import logger from './log.js';

const SESSION_MAX_AGE_MILLISECONDS = 60 * 60 * 1000 - 1000;

const setupRedis = () => {
  const RedisStore = connectRedis(session);

    const redisClient = redis.createClient({
      host: config.redis.host,
      password: config.redis.password,
      port: config.redis.port,
    });

    redisClient.unref();
    redisClient.on('error', (err) => {
      logger.error('Redis client feil.', err);
    });
    redisClient.on('connect', () => {
      logger.info('Redis client connected.');
    });

    return new RedisStore({
      client: redisClient,
      disableTouch: true,
    });
};

const setup = (app) => {
  app.set('trust proxy', 1);
  const options = {
    cookie: {
      maxAge: SESSION_MAX_AGE_MILLISECONDS,
      sameSite: 'strict',
      httpOnly: true,
    },
    secret: [config.server.sessionSignKey, config.server.sessionVerifyKey],
    name: config.server.cookieName,
    resave: false,
    saveUninitialized: false,
    unset: 'destroy',
  };
  if (process.env.NODE_ENV !== 'development') {
    options.cookie.secure = true;
    options.store = setupRedis();
  }
  app.use(session(options));
};

export default { setup };
