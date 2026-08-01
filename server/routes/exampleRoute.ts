import { Router } from "express";
import { getUser, updateUser } from "../controllers/exampleController.ts";

const router = Router();

router.get('/yo', getUser);
router.post('/yo', updateUser);

