import { type Request, type Response } from 'express';
import mongoose from 'mongoose';
import Patient from '../models/Patients.ts';
import type { CustomRequest } from '../customInterfaces.ts';

interface IPatientParams {
    id?: string;
}

/**
 * @desc 
 * @route GET
 * @access 
**/
export const getPatient = async (req: Request<IPatientParams>, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        if (id) {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.status(400).json({ message: 'Invalid Patient ID format' });
                return;
            }

            const patient = await Patient.findById(id);
            if (!patient) {
                res.status(404).json({
                    success: false, message: 'User not found'
                });

                return;
            }
            res.status(200).json(patient);
            return;
        }

        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        console.error(`Profile get error: ${error}`);
        res.status(500).json({ success: false, message: "Server Error", error: error });
    }
}

/**
 * @desc 
 * @route POST
 * @access 
 */
export const newPatient = async (req: CustomRequest, res: Response): Promise<void> => {
    try {
        const { name, password, email } = req.body;

        if (!name || !password || !email) {
            res.status(400).json({ success: false, message: 'Name, password and email fields are required' });
            return;
        }

        const existingUser = await Patient.findOne({ email });
        if (existingUser) {
            res.status(400).json({ success: false, message: 'User with this email already exists' });
            return;
        }
        const newPatient = await Patient.create({ name, password, email });
        res.status(201).json({
            success: true,
            message: 'New patient created successfully',
            patient: newPatient
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Server Error'
        });
    }
};

/**
 * @desc Update User by id
 * @route PUT
 * @access self
 */
export const updatePatient = async (req: CustomRequest, res: Response): Promise<void> => {
    try {
        console.log('Update patient request body:', req.params, req.body);
        const { id: userId } = req.params;
        const { name } = req.body;


        if (!name) {
            res.status(400).json({ success: false, message: 'Name field is required' });
            return;
        }
        const user = await Patient.findByIdAndUpdate(
            userId,
            { name },
            { new: true, runValidators: true }
        );

        if (!user) {
            res.status(404).json({
                success: false, message: 'User not found'
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: `User updated name to ${name}`
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Server Error'
        });
    }
}
