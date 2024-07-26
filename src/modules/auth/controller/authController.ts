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
    await sendEmail(register.email, "Email Verification", `${process.env.SERVER_URL_PRO}/api/auth/verify-email/${token}`)
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

  try {
    await sendEmail(req.user.email, "Email verification", `${process.env.SERVER_URL_PRO}/auth/emailVerify/${req.session.token}`)
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

    await authRepo.updateUserByAttributes("id", req.user.id, "isVerified", true)
    res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: "Account verified successfully, now login"
    })
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      error: error.message
    })
  }
}


export default { registerUser, emailVerification, verifyEmail }