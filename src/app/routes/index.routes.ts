import { Router } from 'express';
import memberRoutes from './members.routes';
import userRoutes from './users.routes';
import authRoutes from './auth.routes';
import departamentRoutes from './departaments.routes';
import positionRoutes from './positions.routes';

const routes = Router();

routes.use('/members', memberRoutes);
routes.use('/users', userRoutes);
routes.use('/auth', authRoutes);
routes.use('/departaments', departamentRoutes);
routes.use('/positions', positionRoutes);

export default routes;
