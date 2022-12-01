import 'reflect-metadata';

import express from 'express';
import routes from './routes/index';

import './database';

const app = express();
app.use(express.json())

app.use('/', routes);
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(3333, () => {
  console.log('aplicação iniciada')
})
