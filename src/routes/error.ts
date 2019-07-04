import { Response } from "express-serve-static-core";
import { NextFunction } from "connect";

export const router = (error: any, request: any, response: Response, next: NextFunction): void => {
  response
    .status(error.status)
    .json({
      status: error.status,
      message: error.message,
    })
};
