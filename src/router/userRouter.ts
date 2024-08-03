import { userAuthorization } from "../middleware/authorization";
import { isUserExist, validation } from "../middleware/validations";
import userController from "../modules/user/controller/userController";
import { 
    roleSchema ,
    userSchema
} from "../modules/user/validations/userValidations";
import { Router } from "express";
import upload from "../helpers/multer"

const router = Router();

router.get("/admin-get-users", userAuthorization(["admin"]), isUserExist, userController.adminGetAllUsers)
router.get("/admin-get-user/:id", userAuthorization(["admin"]), isUserExist, userController.adminGetUser)
router.put("/admin-update-user-role/:id", userAuthorization(["admin"]), validation(roleSchema), isUserExist,userController.adminUpdateUserRole )

router.get("/user-get-profile", userAuthorization(["admin", "client", "manager"]),userController.userGetProfile)
router.put("/user-update-profile", userAuthorization(["admin", "client", "manager"]),upload.single("profilePicture"),validation(userSchema), userController.userUpdateProfile)
export default router