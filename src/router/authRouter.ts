import { Router } from "express";
import authController from "../modules/auth/controller/authController";
import { 
    isAccountVerified,
    isSessionExist,
    isUserExist,
    isUserVerified,
    validation, 
    verifyUser
} from "../middleware/validations";
import { credentialSchema } from "../modules/auth/validation/authValidation";

const router = Router();

router.post("/register-user",validation(credentialSchema), isUserExist, authController.registerUser)
router.post("/email-verification",isAccountVerified, authController.emailVerification)
router.get("/verify-email/:token",isAccountVerified, authController.verifyEmail)
router.post("/login-user", isUserVerified, authController.loginUser)
router.post("/forgot-password", verifyUser, authController.forgotPassword)
router.put("/reset-password/:token", verifyUser, isSessionExist, authController.resetPassword)


export default router