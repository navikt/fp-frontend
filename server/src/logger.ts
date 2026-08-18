import morgan from "morgan";
import winston from "winston";

const { format } = winston;
const { combine, json, timestamp } = format;

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  const isDevelopment =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development";
  return isDevelopment ? "debug" : "info";
};

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};

// eslint-disable-next-line unicorn/no-top-level-side-effects
winston.addColors(colors);

const uppercaseLevel = format((info) => {
  info.level = info.level.toUpperCase();
  return info;
});

const stdoutLogger = winston.createLogger({
  level: level(),
  levels,
  transports: [
    new winston.transports.Console({
      // eslint-disable-next-line unicorn/max-nested-calls
      format: combine(timestamp(), uppercaseLevel(), json()),
    }),
  ],
});

const debug = (message: string) => {
  stdoutLogger.debug(message.replaceAll(/[\n\r]/g, ""));
};

const info = (message: string) => {
  stdoutLogger.info(message.replaceAll(/[\n\r]/g, ""));
};

const warning = (message: string) => {
  stdoutLogger.warn(message.replaceAll(/[\n\r]/g, ""));
};

const error = (message: string, error_?: unknown) => {
  if (error_ instanceof Error) {
    stdoutLogger.error(message, { message: `: ${error_.message}` });
  } else {
    stdoutLogger.error(message, { message: `: ${error_}` });
  }
};

const shouldSkip = () => process.env.NODE_ENV === "production";

const vanligFormat =
  ":method :url :status :res[content-length] - :response-time ms";

const morganMiddleware = morgan(vanligFormat, {
  stream: {
    // Use the HTTP severity
    write: (message) => stdoutLogger.http(message),
  },
  skip: shouldSkip,
});

export default {
  debug,
  info,
  warning,
  error,
  logger: stdoutLogger,
  morganMiddleware,
};
