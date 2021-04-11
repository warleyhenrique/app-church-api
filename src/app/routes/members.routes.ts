import { Router } from 'express';
import MemberController from '../controllers/memberController';

const membersRouter = Router();

membersRouter.get('/members', MemberController.index);
membersRouter.get('/members/:id', MemberController.show);
membersRouter.post('/members', MemberController.store);
membersRouter.put('/members/:id', MemberController.update);
membersRouter.delete('/members/:id', MemberController.delete);

export default membersRouter;
