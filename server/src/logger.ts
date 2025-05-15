import morgan from "morgan";
import winston from "winston";

const { format } = winston;
const { combine, json, timestamp } = format;

const levels = {
  ERROR: 0,
  WARN: 1,
  INFO: 2,
  HTTP: 3,
  DEBUG: 4,
};

const level = () => {
  const isDevelopment =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development";
  return isDevelopment ? "DEBUG" : "INFO";
};

const colors = {
  ERROR: "red",
  WARN: "yellow",
  INFO: "green",
  HTTP: "magenta",
  DEBUG: "white",
};

winston.addColors(colors);

const stdoutLogger = winston.createLogger({
  level: level(),
  levels,
  transports: [
    new winston.transports.Console({
      format: combine(timestamp(), json()),
    }),
  ],
});

const debug = (msg: string) => {
  stdoutLogger.debug(msg.replaceAll(/[\n\r]/g, ""));
};

const info = (msg: string) => {
  stdoutLogger.info(msg.replaceAll(/[\n\r]/g, ""));
};

const warning = (msg: string) => {
  stdoutLogger.warn(msg.replaceAll(/[\n\r]/g, ""));
};

const error = (msg: string, err?: unknown) => {
  if (err instanceof Error) {
    stdoutLogger.error(msg, { message: `: ${err.message}` });
  } else {
    stdoutLogger.error(msg, { message: `: ${err}` });
  }
};

const skip = () => process.env.NODE_ENV === "production";

const vanligFormat =
  ":method :url :status :res[content-length] - :response-time ms";

const morganMiddleware = morgan(vanligFormat, {
  stream: {
    // Use the http severity
    write: (message) => stdoutLogger.http(message),
  },
  skip,
});

export default {
  debug,
  info,
  warning,
  error,
  logger: stdoutLogger,
  morganMiddleware,
};
