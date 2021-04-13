import { Router } from 'express';
import MemberController from '../controllers/memberController';

const membersRouter = Router();

membersRouter.get('/', MemberController.index);
membersRouter.get('/:id', MemberController.show);
membersRouter.post('/', MemberController.store);
membersRouter.put('/:id', MemberController.update);
membersRouter.delete('/:id', MemberController.delete);

export default membersRouter;
