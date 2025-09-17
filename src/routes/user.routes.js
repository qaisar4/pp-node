import { Router } from "express";
import { userProfile } from "../controllers/user.controller.js";
import { authenticateToken } from "../middleWare/authMiddleWare.js";

const userRouter=Router();
userRouter.get("/api/profile", authenticateToken, userProfile);
export default userRouter;