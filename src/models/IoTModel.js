import { Schema,model } from "mongoose";

const sensorSchema = new Schema({
    temperatura:String,
    humedad:String,
    distancia:String
},{
    timestamps:true,
    versionKey:false
}

)

export default model('sensors', sensorSchema);