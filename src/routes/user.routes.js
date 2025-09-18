import { Router } from "express";
import { userProducts, userProfile } from "../controllers/user.controller.js";
import { authenticateToken } from "../middleWare/authMiddleWare.js";

const userRouter=Router();
userRouter.get("/api/profile", authenticateToken, userProfile);
userRouter.get("/api/profile/products", authenticateToken, userProducts);
export default userRouter;