import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId =
  (idName = 'id') =>
  (req, res, next) => {
    const id = req.params[idName];

    if (!isValidObjectId(id)) {
      next(createHttpError(400, 'Invalid ID! Please specify correct data'));
    }

    next();
  };
