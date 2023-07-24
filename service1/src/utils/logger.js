import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
    process.env.NODE_ENV !== 'production' &&
      new winston.transports.Console({
        format: winston.format.simple(),
      }),
  ],
});

export default logger;