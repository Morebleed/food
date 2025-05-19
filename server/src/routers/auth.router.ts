import { Router } from "express"
import { signupController } from "../controllers/auth/signup.controller";



export const authRouter = Router();


authRouter.post("/sing-up", signupController);