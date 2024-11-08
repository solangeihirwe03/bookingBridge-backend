import httpStatus from "http-status";
import userRepo from "../repository/userRepo";
import { Response, Request } from "express";
import authRepo from "../../auth/repository/authRepo";
import uploadImages from "../../../helpers/uploadImage";

const adminGetAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await userRepo.findAllUsers()
        return res.status(httpStatus.FOUND).json({
            status: httpStatus.FOUND,
            data: { users }
        })
    } catch (error: any) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message
        })
    }

}

const adminGetUser = async (req: Request, res: Response) => {
    try {
        const user = await authRepo.findUserByAttributes("id", req.params.id)
        return res.status(httpStatus.FOUND).json({
            status: httpStatus.FOUND,
            data: { user }
        })
    } catch (error: any) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message
        })
    }
}

const adminUpdateUserRole = async (req: Request, res: Response) => {
    try {

        const role = await authRepo.updateUserByAttributes(
            "role",
            req.body.role,
            "id",
            req.params.id
        )

        return res.status(httpStatus.OK).json({
            status: httpStatus.OK,
            data: { role }
        })

    } catch (error: any) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message
        })
    }
}

const userGetProfile = async(req:any, res:Response)=>{
    try{
        const user = await authRepo.findUserByAttributes("id", req.user.id)

        return res.status(httpStatus.FOUND).json({
            status: httpStatus.FOUND,
            data: {user}
        })
    }catch(error: any){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message
        })
    }
    
}

const userUpdateProfile = async(req:any, res: Response)=>{
    try{
        let profilePicture;
        if(req.file){
            const upload = await uploadImages(req.file)
            profilePicture = upload.secure_url
        }

        const userData = {...req.body, profilePicture}

        const updatedProfile = await userRepo.updateProfile(userData, req.user.id)

        return res.status(httpStatus.OK).json({
            status: httpStatus.OK,
            data: {updatedProfile}
        })
    }catch(error: any){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message
        })
    }
}

export default { adminGetAllUsers, adminUpdateUserRole, adminGetUser, userGetProfile, userUpdateProfile }