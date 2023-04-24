import { getAuth } from 'firebase-admin/auth';
import type { Response, NextFunction } from 'express';
import type { CustomRequest } from '../models/Request.model.js';
import type { User } from '../models/User.model.js';

const verifyUser = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const { authtoken } = req.headers;

  if (authtoken) {
    try {
      req.user = await getAuth().verifyIdToken(authtoken);
    } catch (err) {
      return res
        .status(400)
        .json({ message: 'You are not allowed to see this content' });
    }
  }

  req.user = (req.user as User) || {};

  next();
};

export { verifyUser };
