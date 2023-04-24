import type { Request } from 'express';
import type { IncomingHttpHeaders } from 'http';
import type { User } from './User.model.js';

type CustomHeaders = {
  readonly authtoken?: string;
};

export interface CustomRequest extends Request {
  headers: IncomingHttpHeaders & CustomHeaders;
  user?: User;
}
