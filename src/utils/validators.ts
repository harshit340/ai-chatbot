import { Request,Response, NextFunction } from "express";
import { body, ValidationChain , validationResult } from "express-validator";

export const validate=(validations:ValidationChain[])=>{
    return async (req:Request, res:Response,next:NextFunction)=>{
        for(let validation of validations){
            const result = await validation.run(req);
            if(!result.isEmpty()){
                break;
            }
        }
        const errors = validationResult(req);
        if(errors.isEmpty()){
            return next();
        }
        return res.status(422).json({errors:errors.array()});
    }
}

export const loginValidator = [
    
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password").trim().isLength({min:6}).withMessage("password is required"),
]


export const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    // it will inheritae the validators of login validator
    ...loginValidator
]
