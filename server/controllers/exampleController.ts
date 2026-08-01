import { type Request, type Response } from 'express';
import User from '../models/Users.ts';
import type { CustomRequest } from '../customInterfaces.ts';

/**
 * @desc 
 * @route GET
 * @access 
 */
export const getUser = async (req: CustomRequest, res: Response): Promise<void> => {
    try {
        const userId = req.user?.id;
        const user = await User.findById(userId);

        if (!user){
            res.status(404).json({
                success: false, message: 'User not found'
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: "User profile data fetched successfully",
            user: { id: 1, name: "Alex Jones" }
        });
    } catch (error) {
        console.error(`Profile get error: ${error}`);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

/**
 * @desc 
 * @route POST
 * @access 
 */
export const updateUser = async (req: CustomRequest , res: Response): Promise<void> => {
    try{
        const userId = req.user?.id;
        const { name } = req.body;
        
        if (!name){
            res.status(400).json({ success: false, message: 'Name field is required' });
            return;
        }
        const user = await User.findByIdAndUpdate(
            userId,
            { name },
            { new: true, runValidators:true }
        );

        if (!user){
            res.status(404).json({
                success: false, message: 'User not found'
            });
            return;
        }
        
        res.status(200).json({
            success: true,
            message: `User updated name to ${name}`
        });
    } catch (error){
        res.status(500).json({
            status: false,
            message: 'Server Error'
        });
    }
}
