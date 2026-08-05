import { type Request, type Response } from 'express';
import mongoose from 'mongoose';
import Patient from '../models/Patients.ts';
import type { CustomRequest } from '../customInterfaces.ts';
import bcrypt from 'bcrypt';


export const loginController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ success: false, message: 'Email and password fields are required' });
            return;
        }

        const patient = await Patient.findOne({ email }).select('+password');
        if (!patient) {
            res.status(404).json({ success: false, message: 'User not found' });
            return;
        }

        const isMatch = await bcrypt.compare(password, patient.password);

        if (!isMatch) {
            res.status(400).json({ success: false, message: 'Invalid Credentials' });
            return;
        }

        res.status(200).json({ success: true, message: 'Login successful', patient });

    }catch (error) {
        console.error('Error in loginController:', error);
    }
}
