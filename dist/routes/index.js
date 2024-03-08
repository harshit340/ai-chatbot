import { Router } from "express";
import userRouter from "./userrouter.js";
import chatRouter from "./chatrouter.js";
const appRouter = Router();
appRouter.use("/user", userRouter);
appRouter.use("/chat", chatRouter);
export default appRouter;
//# sourceMappingURL=index.js.map