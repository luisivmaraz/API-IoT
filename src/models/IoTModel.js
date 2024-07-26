import { Schema,model } from "mongoose";

const sensorSchema = new Schema({

    status:String,
    typeSensor: String,
    sensorData:String,
    unit:String,
    parameter: String
},{
    timestamps:true,
    versionKey:false
}

)

export default model('sensors', sensorSchema);