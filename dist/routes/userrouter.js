import { Router } from "express";
import { getAllUser, signUpUser } from "../controller/user-routes.js";
const userRouter = Router();
userRouter.get("/", getAllUser);
userRouter.post("/signup", signUpUser);
export default userRouter;
//# sourceMappingURL=userrouter.js.map