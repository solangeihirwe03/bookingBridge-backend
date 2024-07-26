import { Response, Request, NextFunction } from "express";
import authRepo from "../modules/auth/repository/authRepo";
import { usersAttributes } from "../database/model/user";
import httpStatus from "http-status";

const isUserExist = async (req: Request, res: Response, next: NextFunction) => {

    try {
        let userExist: usersAttributes | null = null;

        if (req.body.email) {
            userExist = await authRepo.findUserByAttributes("email", req.body.email)
            if (userExist) {
                if (!userExist.isVerified) {
                    return res.status(httpStatus.CONFLICT).json({
                        status: httpStatus.CONFLICT,
                        error: "Account already exist  "
                    })
                }
                return res.status(httpStatus.CONFLICT).json({
                    status: httpStatus.CONFLICT,
                    message: "Account already exists. Please verify your account",
                });
            }
        }
        if (req.params.id) {
            userExist = await authRepo.findUserByAttributes(
                "id",
                req.params.id
            );
            if (userExist) {
                return next();
            }
            return res
                .status(httpStatus.NOT_FOUND)
                .json({ status: httpStatus.NOT_FOUND, message: "User not found" });
        }
        return next()
    }
    catch (error: any) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message,
        });
    }
}

export default {
    isUserExist
}