import { Response, NextFunction, Request } from "express-serve-static-core";
import { isArray } from "util";

export const queryValidator = (request: Request, response: Response, next: NextFunction): void => {
  const { params } = request;
  const { q } = params;
  const anagramsArray = q.split(',');
  if (!isArray(anagramsArray)) {
    next({
      status: 400,
      message: 'Wrong parameters send'
    });
  }
  next();
}