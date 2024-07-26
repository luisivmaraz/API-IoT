import express from 'express';
import morgan from 'morgan';
import { config } from "dotenv";
config();
import routerSensors from './routes/IoTRoutes.js'; // Cambiado a las rutas 

const app = express();

// configuración
app.set('view engine', 'ejs');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/', routerSensors); // Cambiado a utilizar las rutas 

export default app;

