import 'reflect-metadata';
import express from 'express';

import './Database/Connect';

const app = express();

app.listen(3333, () => {
  console.log('🚀 Server run on http://localhost:3333');
});
