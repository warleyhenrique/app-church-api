import { Router } from 'express';
import UserController from '../controllers/userController';

const usersRouter = Router();

usersRouter.post('/users', UserController.store);

export default usersRouter;
