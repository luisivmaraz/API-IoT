import { Router } from "express";
import {  getAllSensors,  InsertSensor } from "../controllers/IoTController.js";

const router = Router();

router.get('/', getAllSensors);
router.post('/', InsertSensor);

export default router;
