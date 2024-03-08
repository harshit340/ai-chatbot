import { randomUUID } from "crypto";
import mongoose from "mongoose";
const chatSchema = new mongoose.Schema({
    id:{
        type:String,
        default:randomUUID(),
    },
    role:{
        type:String,
        require:true
    },
    contant:{
        type:String,
        require:true,
    }
});

 const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    chat:[chatSchema],
 });

 export default mongoose.model("user",userSchema);