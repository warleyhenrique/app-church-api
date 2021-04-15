import { Router } from 'express';
import PositionController from '../controllers/positionController';
import AuthMiddleware from '../middlewares/authMiddleware';

const positionsRouter = Router();

positionsRouter.get('/', AuthMiddleware, PositionController.index);
positionsRouter.get('/:id', AuthMiddleware, PositionController.show);
positionsRouter.post('/', AuthMiddleware, PositionController.store);
positionsRouter.put('/:id', AuthMiddleware, PositionController.update);
positionsRouter.delete('/:id', AuthMiddleware, PositionController.destroy);

export default positionsRouter;
