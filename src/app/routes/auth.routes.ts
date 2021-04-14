import { Router } from 'express';
import AuthController from '../controllers/authController';

const authRouter = Router();

authRouter.post('/', AuthController.authenticate);

export default authRouter;
