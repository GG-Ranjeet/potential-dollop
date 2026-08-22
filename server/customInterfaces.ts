import { type Request } from 'express';
import type { ObjectId } from 'mongoose';

export interface CustomRequest extends Request {
    user?: {
        id: String;
    }
}
export interface IJWTPayload {
  userId: string;
  userName: string;
  email: string;
  role: string;
}