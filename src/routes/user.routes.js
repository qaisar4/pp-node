import { Router } from "express";
import { userProducts, userProfile,userMovies } from "../controllers/user.controller.js";
import { authenticateToken } from "../middleWare/authMiddleWare.js";

const userRouter=Router();
userRouter.get("/api/profile", authenticateToken, userProfile);
userRouter.get("/api/profile/products", authenticateToken, userProducts);
userRouter.get("/api/profile/movies", authenticateToken, userMovies);

export default userRouter;