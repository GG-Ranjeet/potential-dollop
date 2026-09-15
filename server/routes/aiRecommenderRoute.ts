import { Router } from "express";
import { continueChat, startNewChat } from "../controllers/aiController.ts";

const router = Router();

router.get('/chat/new', startNewChat);
router.get('/chat/:sessionId', continueChat);

export default router;