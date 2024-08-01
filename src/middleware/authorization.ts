import { Request, Response, NextFunction } from "express";
import Sessions from "../database/model/sessions";
import { usersAttributes } from "../database/model/user";
import authRepo from "../modules/auth/repository/authRepo";
import httpStatus from "http-status";
import { decodeToken } from "../helpers";

interface ExtendedRequest extends Request {
    user: usersAttributes
    session?: Sessions
}

const userAuthorization: any = (roles: string[]) => {
    return async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        try {

            const token = req.headers["authorization"]?.split(" ")[1];
            if (!token) {
                return res
                    .status(httpStatus.UNAUTHORIZED)
                    .json({ status: httpStatus.UNAUTHORIZED, message: "Not authorized" });
            }

            const decoded: any = await decodeToken(token)
            const session: any = await authRepo.findSessionByUserIdAndToken(decoded.id, token)
            if (!session) {
                return res.status(httpStatus.UNAUTHORIZED).json({
                    status: httpStatus.UNAUTHORIZED,
                    error: "Unauthorized"
                })
            }

            const user: any = await authRepo.findUserByAttributes("id", decoded.id)

            if (!user) {
                return res.status(httpStatus.UNAUTHORIZED).json({
                    status: httpStatus.UNAUTHORIZED,
                    error: "not authorized"
                })
            }

            if (!roles.includes(user.role)) {
                return res.status(httpStatus.UNAUTHORIZED).json({
                    status: httpStatus.UNAUTHORIZED,
                    error: "not authorized"
                })
            }

            req.user = user;
            req.session = session
            next()
        } catch (error: any) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                status: httpStatus.INTERNAL_SERVER_ERROR,
                error: error.message
            })
        }
    }
}

export {
    userAuthorization
}