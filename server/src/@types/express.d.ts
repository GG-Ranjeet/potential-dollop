import { UserDocument } from '../models/Users'; // Import your Mongoose User type if available

declare global {
  namespace Express {
    interface Request extends Express.Request {
      user?: any; // Or use UserDocument / your custom User payload type
    }
  }
}