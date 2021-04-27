import * as dotenv from 'dotenv';
import 'reflect-metadata';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';

import './shared/container';
import './database';

import { AppError } from './erros/AppError';

import 'express-async-errors';

import routes from './routes';

dotenv.config();

const app = express();
app.use(cors())

app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  console.log(err);
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
  });
});

app.listen(3001, () => {
  console.log('server started on port 3001');
});
