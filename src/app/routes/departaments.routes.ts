import { Router } from 'express';
import DepartamentController from '../controllers/departamentController';
import AuthMiddleware from '../middlewares/authMiddleware';

const departamentsRouter = Router();

departamentsRouter.get('/', AuthMiddleware, DepartamentController.index);
departamentsRouter.get('/:id', AuthMiddleware, DepartamentController.show);
departamentsRouter.post('/', AuthMiddleware, DepartamentController.store);
departamentsRouter.put('/:id', AuthMiddleware, DepartamentController.update);
departamentsRouter.delete('/:id', AuthMiddleware, DepartamentController.destroy);

export default departamentsRouter;
