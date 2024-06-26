import express from 'express';
import morgan from 'morgan';
import { config } from "dotenv";
config();
import routerSensors from './routes/IoTRoutes.js'; // Cambiado a las rutas de tickets

const app = express();

// configuración
app.set('view engine', 'ejs');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/', routerSensors); // Cambiado a utilizar las rutas de tickets

export default app;

