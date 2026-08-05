import { type Request, type Response, type NextFunction } from 'express';

export class CustomError extends Error {
    status: number;
    path: any;

    constructor(message: string, status: number, path: any) {
        super(message);
        this.status = status;
        this.path = path;
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
    let statusCode = err.status || 500;
    let message = err.message || 'Internal Server Error';



    if (err.name === 'CastError') {
        statusCode = 400;
        message = `Invalid ${err.path}.`;
    }
    if (err.code === 11000) {
        statusCode = 400;
        const field = Object.keys(err.keyValue || {})[0] || 'field';
        message = `Duplicate value entered for ${field}. Please use another value.`;
    }
    if (err instanceof SyntaxError && 'body' in err) {
        statusCode = 400;
        message = 'Invalid JSON payload. Check quotes and formatting.';
    }

    res.status(statusCode).json({
        success: false,
        message: message,
        ...(err.path && { path: err.path }),
        // stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
}