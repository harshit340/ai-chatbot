import express from "express";
import { config } from "dotenv";
import { connecttodatabase } from "./db/connection.js";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
config();
const app = express();
app.use(express.json());
/* 'dev' is a predefined format provided by Morgan. It prints concise output that includes the HTTP method, status code, response time, and request URL. */
app.use(morgan('dev'));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use("/api/v1", appRouter);
// connecting to mongodb server
connecttodatabase().then(() => {
    app.listen(8000, () => {
        console.log("server on and connected to database");
    });
});
//# sourceMappingURL=index.js.map