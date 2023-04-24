import type { Response, NextFunction } from 'express';
import type { CustomRequest } from '../models/Request.model.js';

const authorizeUser = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user) {
    next();
  } else {
    res.status(401).json({
      message: 'Sorry, you need to log in to comment and upvote this article'
    });
  }
};

export { authorizeUser };
