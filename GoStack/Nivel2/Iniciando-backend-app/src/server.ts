import 'reflect-metadata';

import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from './routes/index';

import AppError from './errors/AppError';

import './database';

import uploadConfig from './config/upload';

const app = express();

app.use(cors());
app.use(express.json())
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }

  console.log(err);

  return res.status(500).json({
    status: 'error',
    message: 'internal server error'
  })
})

app.listen(3333, () => {
  console.log('aplicação iniciada')
})
