import { Router } from "express";
import authController from "../modules/auth/controller/authController";
import validations from "../middleware/validations";
import { credentialSchema } from "../modules/auth/validation/authValidation";

const router = Router();

router.post("/register-user", validations.isUserExist, authController.registerUser,)
router.post("/email-verification", authController.emailVerification)
router.get("/verify-email/:token", authController.verifyEmail)


export default router