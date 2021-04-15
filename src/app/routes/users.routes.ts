import { Router } from 'express';
import UserController from '../controllers/userController';

const usersRouter = Router();

usersRouter.get('/', UserController.index);
usersRouter.get('/:id', UserController.show);
usersRouter.post('/', UserController.store);
usersRouter.put('/:id', UserController.update);
usersRouter.delete('/:id', UserController.destroy);

export default usersRouter;
