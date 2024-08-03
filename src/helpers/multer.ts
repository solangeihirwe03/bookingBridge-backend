import multer from "multer";
import path from "path";
import { Request } from "express";

export const fileFilter = (req: Request, file: Express.Multer.File, cb: any)=>{
    const ext= path.extname(file.originalname).toLowerCase();
    if(ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png"){
        return cb(new Error("Only images allowed"));
    }
    cb(null, true);
};

const storage = multer.diskStorage({});

const multerConfig = multer ({
    storage,
    fileFilter
})

export default multerConfig