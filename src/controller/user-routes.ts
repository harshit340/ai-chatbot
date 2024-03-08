import {Request,Response,NextFunction} from "express";
import user from "../modules/user.js"

export const getAllUser = async(req:Request,res:Response,next:NextFunction)=>{
 try {
    const users = await user.find();
    return res.status(200).json({message: "OK" ,users});
 } catch (error) {
    console.log(error);
    return res.status(200).json({message: "ERROR" ,cause:error.message});
 }
};