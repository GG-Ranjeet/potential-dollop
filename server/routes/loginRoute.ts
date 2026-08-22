import { Router } from "express";
import { loginController } from "../controllers/loginController.ts";

const router = Router();

router.post('/', loginController);

export default router;