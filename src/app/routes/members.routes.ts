import { Router } from 'express';
import MemberController from '../controllers/memberController';
import AuthMiddleware from '../middlewares/authMiddleware';

const membersRouter = Router();

membersRouter.get('/', AuthMiddleware, MemberController.index);
membersRouter.get('/:id', AuthMiddleware, MemberController.show);
membersRouter.post('/', AuthMiddleware, MemberController.store);
membersRouter.put('/:id', AuthMiddleware, MemberController.update);
membersRouter.delete('/:id', AuthMiddleware, MemberController.delete);

export default membersRouter;
