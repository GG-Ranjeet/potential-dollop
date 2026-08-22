import { Router, type Request, type Response } from "express";
import { getPatient, newPatient, updatePatient } from "../controllers/patientController.ts";

const router = Router();

router.post('/', newPatient); // new patient

export default router