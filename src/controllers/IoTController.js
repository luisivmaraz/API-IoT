import IoTDao from "../dao/IoTDao.js";



export const getAllSensors = (req, res) => {
    IoTDao.getAll()
        .then(result => {
            res.json(result);
        })
        .catch(err => console.error(err));
};



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



