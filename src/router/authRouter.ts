import { Router } from "express";
import authController from "../modules/auth/controller/authController";
import { 
    isAccountVerified,
    isUserExist,
    isUserVerified,
    validation 
} from "../middleware/validations";
import { credentialSchema } from "../modules/auth/validation/authValidation";

const router = Router();

router.post("/register-user",validation(credentialSchema), isUserExist, authController.registerUser)
router.post("/email-verification",isAccountVerified, authController.emailVerification)
router.get("/verify-email/:token",isAccountVerified, authController.verifyEmail)
router.post("/login-user", isUserVerified, authController.loginUser)


export default router