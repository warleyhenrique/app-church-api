import { response, Router } from 'express';

const usersRouter = Router();

usersRouter.get('/users', (request, response) => response.sendStatus(200));

export default usersRouter;
