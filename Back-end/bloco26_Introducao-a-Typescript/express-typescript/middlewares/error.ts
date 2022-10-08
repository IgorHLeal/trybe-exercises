import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const validationErros = (error: Error, req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = error as any;
  console.log(`name: ${name}`);

  switch (name) {
    case 'ValidationError':
      res.status(StatusCodes.BAD_REQUEST).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(StatusCodes.NOT_FOUND).json({ message });
      break;
    case 'ConflictError':
      res.status(StatusCodes.CONFLICT).json({ message });
      break;
    default:
      console.error(error);
      res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }

  next();
};

export default validationErros;
