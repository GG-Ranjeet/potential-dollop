import { Router, type Request, type Response } from "express";
import { getPatient, newPatient, updatePatient } from "../controllers/patientController.ts";

const router = Router();

router.get('/', getPatient);     // get all patients
router.get('/:id', getPatient);  // get patient by id
router.post('/new', newPatient); // new patient
router.put('/:id', updatePatient); // new patient
// router.patch('/:id', updatePatient); // update

export default router