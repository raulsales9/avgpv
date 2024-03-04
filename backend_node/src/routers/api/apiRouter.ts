import express, { Request, Response, NextFunction } from 'express';
import * as authController from '../../controllers/api/authController';
import * as postController from '../../controllers/api/postController';
const apiRoutes = express.Router();

apiRoutes.post('/register', authController.registerUserApi);
apiRoutes.post('/login', authController.loginApi);
apiRoutes.post('/createPost', postController.createPostApi);

export default apiRoutes;