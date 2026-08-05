import { Router } from "express";
import { loginController } from "../controllers/loginController.ts";

const router = Router();

router.get('/', loginController);

export default router;