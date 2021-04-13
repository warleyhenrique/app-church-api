import { Router } from 'express';
import memberRoutes from './members.routes';
import userRoutes from './users.routes';

const routes = Router();

routes.use('/members', memberRoutes);
routes.use('/users', userRoutes);

export default routes;
