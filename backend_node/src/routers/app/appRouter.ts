import express from 'express';
import { getPostAndUser } from './../../controllers/app/socialController';

const router = express.Router();

router.get('/post/:id', getPostAndUser);

export default router;
