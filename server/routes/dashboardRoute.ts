import { Router } from "express";
import { getUser, updateUser } from "../controllers/exampleController.ts";
import { dashboard, dashboardOverview } from "../controllers/dashboardController.ts";

const router = Router();

router.get('/', dashboard);
router.get('/overview', dashboardOverview);


export default router;