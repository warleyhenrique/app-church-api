import { Router } from 'express';
import UserController from '../controllers/userController';

const usersRouter = Router();

usersRouter.get('/users', UserController.index);
usersRouter.get('/users/:id', UserController.show);
usersRouter.post('/users', UserController.store);
usersRouter.put('/users/:id', UserController.update);
usersRouter.delete('/users/:id', UserController.delete);

export default usersRouter;
