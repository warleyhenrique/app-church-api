import { Router } from 'express';
import MemberController from '../controllers/memberController';
import AuthMiddleware from '../middlewares/authMiddleware';

const membersRouter = Router();

membersRouter.get('/', AuthMiddleware, MemberController.index);
membersRouter.get('/:id', MemberController.show);
membersRouter.post('/', MemberController.store);
membersRouter.put('/:id', MemberController.update);
membersRouter.delete('/:id', MemberController.delete);

export default membersRouter;
