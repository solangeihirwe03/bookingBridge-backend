import { Response, Request, NextFunction, RequestHandler } from "express";
import authRepo from "../modules/auth/repository/authRepo";
import { usersAttributes } from "../database/model/user";
import httpStatus from "http-status";
import Joi from "joi";
import { decodeToken } from "../helpers";

const validation = (schema: Joi.ObjectSchema | Joi.ArraySchema): RequestHandler => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const { error } = schema.validate(req.body, { abortEarly: false });
  
        if (error) {
          const errorMessage = error.details
            .map((detail) => detail.message.replace(/"/g, ''))
            .join(', ');

          res.status(httpStatus.BAD_REQUEST).json({
            status: httpStatus.BAD_REQUEST,
            error: errorMessage
          });
          return; 
        }
        next();
      } catch (error: any) {
        res.status(httpStatus.BAD_REQUEST).json({
          status: httpStatus.BAD_REQUEST,
          error: error.message,
        });
      }
    };
  };
  

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

const isAccountVerified = async (req:any, res:Response, next:NextFunction)=>{
    let user : any = null;

    if(req.params.token){
        const decodedToken = await decodeToken(req.params.token)
        console.log(decodedToken)
        user=  await authRepo.findUserByAttributes("token", decodedToken.id)
    }
    if(req.body.email){
        user = await authRepo.findUserByAttributes("email", req.body.email)
    }

    if(!user){
        return res.status(httpStatus.NOT_FOUND).json({
            status: httpStatus.NOT_FOUND,
            error: "Account not found!"
        })
    }

    if(user.isVerified){
        return res.status(httpStatus.BAD_REQUEST).json({
            status: httpStatus.BAD_REQUEST,
            error:" Account already verified"

        })
    }
    req.user = user
    return next()
}

const isUserVerified = async(req:any, res:Response, next:NextFunction)=>{
    let user: usersAttributes | null = null

    if(req.body.email){
        user = await authRepo.findUserByAttributes("email", req.body.email)
        if(!user){
        return res.status(httpStatus.BAD_REQUEST).json({
            status: httpStatus.BAD_REQUEST,
            error: "Invalid email or password"
        })
    }
    }
    if(req.body.IsVerified === false){
        return res.status(httpStatus.BAD_REQUEST).json({
            status: httpStatus.BAD_REQUEST,
            error: "Your account is not verified yet"
        })
    }
    req.user = user
    return next()
}

export {
    isUserExist,
    validation,
    isAccountVerified,
    isUserVerified
}