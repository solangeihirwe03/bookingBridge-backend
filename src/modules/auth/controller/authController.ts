import { generateToken } from "../../../helpers";
import authRepo from "../repo/authRepo";
import httpStatus from "http-status";
import { Response, Request } from "express";

const registerUser = async (req: Request, res: Response) => {
  try {
    const createUser = await authRepo.createUser(req.body)
    const token = generateToken(createUser.id)
    const session = {
      userId: createUser.id,
      token: token,
      device: req.headers["user-device"],
      otp: null
    }
    await authRepo.createSession(session)
    res.status(httpStatus.CREATED).json({
      message:
        "Account created successfully. Please check email to verify account.",
      data: { user: createUser }
    });
  } catch (error :any) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      error: error.message
    });
  }
}

export default {registerUser}