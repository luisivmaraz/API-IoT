import Sensor from '../models/IoTModel.js'

const C = console.log.bind(console.log)
const IoTDao = {}


//Obtiene todos los registros de la db
IoTDao.getAll = async () => {
    const sensors = await Sensor.find()
    return sensors
}


//Inserta datos del sensor a la db
IoTDao.InsertSensor = async (sensor) => {
    const sensorSaved = new Sensor(sensor)
    await sensorSaved.save()
    return true
}



// Obtiene todos los registros del sensor de turbidez 
IoTDao.getTurbidity = async () => {                                 
    const sensorT = await Sensor.find({"typeSensor" : "Turbidity"})
    return sensorT
}




//Obtiene todos los registros del sensor del nivel del agua (maxbotix)
IoTDao.getLevelWater = async () =>{
    const sensorW = await Sensor.find({"typeSensor" : "maxbotix"})
    return sensorW
}


//Obtiene todos los registros del sensor de temperatura de agua
IoTDao.getTemperature =  async () =>{
    const sensorTm = await Sensor.find({"typeSensor": "Temperature"})
    return sensorTm
}








export default IoTDao;
