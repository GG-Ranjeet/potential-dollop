import { type Request, type Response } from 'express';
import mongoose from 'mongoose';
import Patient from '../models/Patients.ts';
import type { CustomRequest } from '../customInterfaces.ts';


export const loginController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
    }catch (error) {
        console.error('Error in loginController:', error);
    }
}
