import { userAuthorization } from "../middleware/authorization";
import { isUserExist, validation } from "../middleware/validations";
import userController from "../modules/user/controller/userController";
import { roleSchema } from "../modules/user/validations/userValidations";
import { Router } from "express";

const router = Router();

router.get("/admin-get-users", userAuthorization(["admin"]), isUserExist, userController.adminGetAllUsers)
router.get("/admin-get-user/:id", userAuthorization(["admin"]), isUserExist, userController.adminGetUser)
router.put("/admin-update-user-role/:id", userAuthorization(["admin"]), validation(roleSchema), isUserExist,userController.adminUpdateUserRole )

export default router