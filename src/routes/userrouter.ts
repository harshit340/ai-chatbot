import { Router } from "express";
import { getAllUser ,signUpUser} from "../controller/user-routes.js";
import {signupValidator, validate} from "../utils/validators.js"

const userRouter = Router();

userRouter.get("/",getAllUser);
userRouter.post("/signup",validate(signupValidator),signUpUser);

export default userRouter;