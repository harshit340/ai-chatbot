import { Router } from "express";
import { getAllUser } from "../controller/user-routes.js";
const userRouter = Router();

userRouter.get("/",getAllUser);

export default userRouter;