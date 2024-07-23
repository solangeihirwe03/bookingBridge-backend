import { Router } from "express";
import authController from "../modules/auth/controller/authController";

const router = Router();

router.post("/register-user", authController.registerUser)

export default router