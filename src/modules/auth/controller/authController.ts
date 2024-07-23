import httpStatus from "http-status";
import { generateToken } from "../../../helpers";
import authRepo from "../repository/authRepo";
import { Response, Request } from "express";
import { sendEmail } from "../../../services/sendEmail";

const registerUser = async(req:Request, res: Response): Promise<void>=>{
    try{
        const register = await authRepo.createUser(req.body)

    const token = generateToken(register.id)
    const session =  {
        userId: register.id,
        device: req.headers["user-agent"],
        token: token,
        otp: null
    }

    const createdSession = await authRepo.createSession(session)
    await sendEmail( register.email, "Email Verification", `Hi there`)
    res.status(httpStatus.CREATED).json({
        status: httpStatus.CREATED,
        message:
          "Account created successfully. Please check email to verify account.",
        data: { user: register }
      });
}catch(error: any){
   res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: error.message
    })
};

}