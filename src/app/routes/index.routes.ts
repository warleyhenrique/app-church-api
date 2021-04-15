import { Router } from 'express';
import memberRoutes from './members.routes';
import userRoutes from './users.routes';
import authRoutes from './auth.routes';
import departamentRoutes from './departaments.routes';

const routes = Router();

routes.use('/members', memberRoutes);
routes.use('/users', userRoutes);
routes.use('/auth', authRoutes);
routes.use('/departaments', departamentRoutes);

export default routes;
