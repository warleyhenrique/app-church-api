import 'reflect-metadata';
import express from 'express';
import './database/Connect';

import usersRouter from './app/routes/users.routes';
import membersRouter from './app/routes/members.routes';

const app = express();

app.use(express.json());
app.use(usersRouter);
app.use(membersRouter);

app.listen(3333, () => {
  console.log('🚀 Server run on http://localhost:3333');
});
