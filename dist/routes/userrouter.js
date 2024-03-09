import { Router } from "express";
import { getAllUser, loginUser, signUpUser } from "../controller/user-routes.js";
import { signupValidator, validate, loginValidator } from "../utils/validators.js";
const userRouter = Router();
userRouter.get("/", getAllUser);
userRouter.post("/signup", validate(signupValidator), signUpUser);
userRouter.post("/login", validate(loginValidator), loginUser);
export default userRouter;
//# sourceMappingURL=userrouter.js.map