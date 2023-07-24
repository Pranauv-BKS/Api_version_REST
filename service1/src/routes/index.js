import express from "express";
import {getHello2} from '../controllers/v2/hello.js'
import {getHello1} from '../controllers/v1/hello.js'
import v1Router from './v1/v1.js'
import v2Router from './v2/v2.js'

const router = express.Router();

router.use('/v1',v1Router);
router.use('/v2',v2Router);

export default router;