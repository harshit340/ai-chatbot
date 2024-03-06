import mongoose from "mongoose";
import { connect , disconnect} from "mongoose";

async function connecttodatabase(){
    try {
        await connect(process.env.MONGODB_URL);
        console.log("connected")
    } catch (error) {
      console.log(error);
      throw new Error("not connected to mongodb")   
    }
}

async function disconnecttodatabase(){
    try {
        await disconnect();
        console.log("disconnected")
    } catch (error) {
      console.log(error);
      throw new Error("not able to  disconnected to mongodb")   
    }
}

export{ connecttodatabase , disconnecttodatabase}