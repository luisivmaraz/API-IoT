import { Router } from "express";
import {  getAllSensors,  InsertSensor,getTurbidity,getLevelWater,getTemperature } from "../controllers/IoTController.js";

const router = Router();

router.get('/', getAllSensors);     //Ruta para obtener todos los registros de la db
router.post('/', InsertSensor);    //Ruta para insertar un registro
router.get('/turbidity', getTurbidity);    //Ruta para obtener todos los registros del sensor de turbidez almacenados de la db
router.get('/levelwater', getLevelWater);  //Ruta para obtener todos los registros del sensor de nivel de agua (maxbotix) almacenados en la db
router.get('/temperature',getTemperature); //Ruta para obtener todos los registros del sensor de temperarura 
export default router;