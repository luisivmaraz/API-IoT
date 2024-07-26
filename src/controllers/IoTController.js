import IoTDao from "../dao/IoTDao.js";


//Maneja la respuerta del get de todos los registros
export const getAllSensors = (req, res) => {
    IoTDao.getAll()
        .then(result => {
            res.json(result);
        })
        .catch(err => console.error(err));
};


// Maneja la respuesta del get de los registros del sensor de turbidez
export const getTurbidity = (req,res) =>{       
    IoTDao.getTurbidity()
        .then(result =>{
            res.json(result);
        } )
        .catch(err=> console.error(err));
}

//Maneja la respuesta del get de los registros del sensor de nivel de agua (maxbotix)
export const getLevelWater = (req,res)=>{
    IoTDao.getLevelWater()
    .then(result => {
        res.json(result);
    })
    .catch(err=>console.error(err));
}


//Maneja la respuesta de la temperatura del get de los registros de la temperatura del agua
export const getTemperature = (req,res) =>{
    IoTDao.getTemperature()
    .then(result=>{
        res.json(result);
    })
    .catch(err=>console.error(err));
}





//Maneja la respuesta al insertar un registro a la db
export const InsertSensor = (req, res) => {
    IoTDao.InsertSensor(req.body)
        .then(result => {
            if (result) {
                res.json({
                    status: "Data saved"
                });
            }
        })
        .catch(err => {
            res.json({
                status: "Server unavailable"
            });
        });
};



