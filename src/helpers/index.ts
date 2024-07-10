import bcrypt from "bcrypt";
import {config} from "dotenv";
import jwt, {JwtPayload} from "jsonwebtoken"

config()

const generateToken = async(id: string)=>{
    return await jwt.sign({ id }, process.env.JWT_SECRET || 'bridge')
}

const hashPassword = async(password: string)=>{
    return await bcrypt.hashSync(password, 10)
}

const comparePassword = async (password: string, hashedPassword: string) =>{
    return await bcrypt.compare(password, hashedPassword);
}

export {generateToken, hashPassword, comparePassword}