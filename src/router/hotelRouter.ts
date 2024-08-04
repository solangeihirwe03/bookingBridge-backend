import { Router } from "express";
import hotelController from "../modules/hotel/controller/hotelController";
import { userAuthorization } from "../middleware/authorization";
import { isHotelExist, transformFilesToBody, validation } from "../middleware/validations";
import { hotelSchema } from "../modules/hotel/validations/hotelValidation";
import upload from "../helpers/multer"

const router = Router();

router.post(
    "/register-hotel", 
    userAuthorization(["manager"]),
    upload.array("hotelImage"), 
    transformFilesToBody,
    validation(hotelSchema), 
    isHotelExist
)

export default router