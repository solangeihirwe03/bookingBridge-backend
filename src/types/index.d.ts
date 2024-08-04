import { Request } from "express";

export interface ExtendRequest extends Request {
    hotels? : any;
    files : Express.Multer.File[];
}