import winston from 'winston';
import morgan from 'morgan';
import morganJson from 'morgan-json';

const { format } = winston;
const { combine, json, timestamp, colorize } = format;

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
}

const level = () => {
  const env = process.env.NODE_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'info';
}

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
}

winston.addColors(colors)

const stdoutLogger = winston.createLogger({
    level: level(),
    levels,
    transports: [
        new winston.transports.Console({
            format: combine(timestamp(), json()),
        }),
    ],
});

const debug = (msg) => {
  stdoutLogger.debug(msg);
};

const info = (msg) => {
  stdoutLogger.info(msg);
};

const warning = (msg) => {
  stdoutLogger.warn(msg);
};

const error = (msg, err) => {
  if (err) {
    stdoutLogger.error(msg, { message: `: ${err.message}` });
  } else {
    stdoutLogger.error(msg, { message: `: ${err}` });
  }
};

const stream = {
  // Use the http severity
  write: (message) => stdoutLogger.http(message),
};

const skip = () => {
  const env = process.env.NODE_ENV || "development";
  return env !== "development";
};

const formatJson = morganJson({
  short: ':method :url :status',
  length: ':res[content-length]',
  'response-time': ':response-time ms'
});

const vanligFormat = ":remote-addr :method :url :status :res[content-length] - :response-time ms";

const morganMiddleware = morgan(
  vanligFormat, { stream, skip }
);


export default {
  debug,
  info,
  warning,
  error,
  logger: stdoutLogger,
  morganMiddleware
}
