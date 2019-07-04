import * as express from 'express';
import { getAnagram } from '../controller/anagram';
import { queryValidator } from '../validators';

export const router = () => {
  const router = express.Router();
  router.get('/:q', [ queryValidator ], getAnagram);
  return router;
};
