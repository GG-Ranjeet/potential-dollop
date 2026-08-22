import { type Request, type Response } from 'express';

export const dashboard = async (req: Request, res: Response): Promise<void> => {
    res.status(200).json({
    success: true,
    user: {
      id: req.user.userId,
      name: req.user.userName,
      email: req.user.email,
      role: req.user.role,
    }
  });
}

export const dashboardOverview = async (req: Request, res: Response): Promise<void> => {
    res.status(200).json({
        success: true,
        message: "Dashboard overview data fetched successfully",
        data: {
            // Add your dashboard overview data here
            totalUsers: 100,
        }
    });
}