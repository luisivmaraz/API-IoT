import Sensor from '../models/IoTModel.js'

const C = console.log.bind(console.log)
const IoTDao = {}

IoTDao.getAll = async () => {
    const sensors = await Sensor.find()
    return sensors
}



IoTDao.InsertSensor = async (ticket) => {
    const sensorSaved = new Sensor(ticket)
    await sensorSaved.save()
    return true
}




export default IoTDao;
