import hotelrepo from "../repository/hotelrepo";
import { ExtendRequest } from "../../../types";
import uploadImages from "../../../helpers/uploadImage";
import { Response } from "express";
import httpStatus from "http-status";

const registerHotel = async(req: ExtendRequest, res: Response)=>{
    try{
       const uploadPromises = req.files.map((file) => uploadImages(file));
       const images = await Promise.all(uploadPromises);

       const hotelData = {
        ...req.body,
        hotelImage: images.map((image)=> image.secure_url)
       }
       const hotel = await hotelrepo.createHotel(hotelData)
       res.status(httpStatus.CREATED).json({
        status: httpStatus.CREATED,
        message: "Hotel created successfully",
        data: {hotel}
       })
    }catch(error:any){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message
        })
    }
}

export default {
    registerHotel
}