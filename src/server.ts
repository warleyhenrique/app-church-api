import 'reflect-metadata';
import express from 'express';
import './database/Connect';

import routers from './app/routes/index.routes';

const app = express();

app.use(express.json());
app.use(routers);

app.listen(3333, () => {
  console.log('🚀 Server run on http://localhost:3333');
});
