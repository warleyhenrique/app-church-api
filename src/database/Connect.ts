import { createConnection } from 'typeorm';

createConnection().then(() => {
  console.log('📚 Database connection successful');
}).catch((err) => { console.log(err.message); });
