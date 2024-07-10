import { Router } from "express";
import authController from "../modules/auth/controller/authController";

const router = Router();

router.post("/register", authController.registerUser)

export default router