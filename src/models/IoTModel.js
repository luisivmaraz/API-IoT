import { Schema,model } from "mongoose";

const sensorSchema = new Schema({
    temperatura:String,
    humedad:String,
    prescencia:String
},{
    timestamps:true,
    versionKey:false
}

)

export default model('sensors', sensorSchema);