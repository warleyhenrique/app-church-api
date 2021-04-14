import { Router } from 'express';
import memberRoutes from './members.routes';
import userRoutes from './users.routes';
import authRoutes from './auth.routes';

const routes = Router();

routes.use('/members', memberRoutes);
routes.use('/users', userRoutes);
routes.use('/auth', authRoutes);

export default routes;
