import {Request,Response,NextFunction} from "express";
import user from "../modules/user.js"
import bcrypt from "bcryptjs"


export const getAllUser = async(req:Request,res:Response,next:NextFunction)=>{
 try {
    const users = await user.find();
    return res.status(200).json({message: "OK" ,users});
 } catch (error) {
    console.log(error);
    return res.status(200).json({message: "ERROR" ,cause:error.message});
 }
};

export const signUpUser = async(req:Request,res:Response,next:NextFunction)=>{
 try {

    const { name,email,password } = req.body;
    const hashedpassword = await bcrypt.hash(password,10);
    const users = new user({name , email , passward:hashedpassword});
     await users.save();
    return res.status(200).json({message: "OK" ,id: users._id.toString(),password:password});
 } catch (error) {
    console.log(error);
    return res.status(200).json({message: "ERROR" ,cause:error.message});
 }
};