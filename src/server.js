import express from "express";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
const app = express();

app.use(express.json());
app.use(authRouter);
app.use(userRouter);
export default app;