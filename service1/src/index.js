// import './config.js';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import logger from './utils/logger.js';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/index.js';

const app = express();

app.set('reverse proxy', 1);
app.use(
    cors({
        origin: '*',
        credentials: true,
    })
);
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(router);

app.use((err, req, res, next) => {
    console.error(err);
    return res.status(500).send(err.message);
});

console.log(process.env);

mongoose.connect(process.env.MONGO_URL,{dbName: process.env.MONGO_DB_NAME}).then(() => {
    app.listen(80, () => {
        logger.info(`Service is listening on port 80`);
    });
});

export default app;
