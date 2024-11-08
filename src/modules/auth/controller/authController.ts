import httpStatus from "http-status";
import { generateToken } from "../../../helpers";
import authRepo from "../repository/authRepo";
import { Response, Request } from "express";
import { sendEmail } from "../../../services/sendEmail";
import { usersAttributes } from "../../../database/model/user";
import dotenv from "dotenv"

dotenv.config()

const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const register: usersAttributes = await authRepo.createUser(req.body)

    const token = generateToken(register.id)
    const session = {
      userId: register.id,
      device: req.headers["user-agent"],
      token: token,
      otp: null
    }

    await authRepo.createSession(session)
    await sendEmail(register.email, "Email Verification", `${process.env.SERVER_URL_DEV}/api/auth/verify-email/${token}`)
    res.status(httpStatus.CREATED).json({
      status: httpStatus.CREATED,
      message:
        "Account created successfully. Please check email to verify account.",
      data: { user: register }
    });
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message
    })
  };
}

const emailVerification = async (req: any, res: Response) => {
  console.log(req.user.email)
  try {
    await sendEmail(req.user.email, "Email verification", `${process.env.SERVER_URL_DEV}/api/auth/verify-email/${req.session.token}`)
    res.status(httpStatus.OK).json(
      {
        status: httpStatus.OK,
        message: "Email verification sent successfully"
      }
    )
  } catch (err: any) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message
    })
  }
}

const verifyEmail = async (req: any, res: Response) => {
  try {
    await authRepo.destroySession("userId", req.user.id, "token", req.session.token)
    await authRepo.updateUserByAttributes("isVerified", true,"id", req.user.id)
    res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: "Account verified successfully, now login"
    })
  } catch (error: any) {
    console.error('Error verifying email:', error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      error: error.message
    })
  }
}

const loginUser = async(req: any, res:Response)=>{
  try{
    const token = generateToken(req.user.id)
    const session = {
      userId: req.user.id,
      device: req.headers["user-device"],
      token: token,
      otp: null
    }

    await authRepo.createSession(session)
    res.status(httpStatus.OK).json({
      message: "Logged in successfully",
      data: {token}
    })
  }catch(error: any){
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      error: error.message
    })
  }
}

const resetPassword = async(req: any, res: Response)=>{
  try{
    await authRepo.updateUserByAttributes("password", req.user.password, "id", req.user.id)
    res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: "Password updated successfully"
    })
  }catch(error: any){
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      error: error.message
    })
  }
}

const forgotPassword = async(req: any, res:Response)=>{
    try{
      const token = generateToken(req.user.id)
      const session = {
        userId: req.user.id,
        device: req.headers["user-device"],
        token: token,
        otp: null
      }

      await authRepo.createSession(session)
      await sendEmail(req.user.email, "Reset Password", `${process.env.SERVER_URL_DEV}/api/auth/reset-password/${token}`)
      res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "check your email for reset successfully"
      })
    }catch(error: any){
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        error: error.message
      })
    }
}


export default { registerUser, emailVerification, verifyEmail, loginUser, resetPassword, forgotPassword }