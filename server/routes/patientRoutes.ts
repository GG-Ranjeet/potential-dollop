import { Router, type Request, type Response } from "express";
import { getPatient, newPatient } from "../controllers/patientController.ts";

const router = Router();

router.get('/', getPatient);
router.get('/:id', getPatient);
router.post('/', newPatient);

export default router