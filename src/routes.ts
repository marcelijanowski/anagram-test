import * as express from 'express';
import { errorRouter, anagramRouter } from './routes/';

const router = () => {
  const router = express.Router();
  router.use('/', anagramRouter());
  router.use(errorRouter);
  return router;
};

export default router;
