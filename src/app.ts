import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as helmet from 'helmet';
import { Application, NextFunction, Request, Response } from 'express-serve-static-core';

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.enable('trust proxy');

app.use((req: Request, res: Response, next: NextFunction): void => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

export default app;
