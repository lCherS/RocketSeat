import express from 'express';
import routes from './routes/index';

import { AppDataSource } from './database';

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    const app = express();
    app.use(express.json())

    app.use('/', routes);
    app.get('/', (req, res) => {
      res.send('Hello World!');
    })

    app.listen(3333, () => {
      console.log('aplicação iniciada')
    })

  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })


