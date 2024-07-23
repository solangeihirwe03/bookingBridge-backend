import bcrypt from "bcrypt";
import {config} from "dotenv";
import jwt from "jsonwebtoken"

config()

const generateToken = async(id: string)=>{
    return jwt.sign({ id }, process.env.JWT_SECRET || 'bridge')
}

const hashPassword = (password: string)=>{
    return bcrypt.hashSync(password, 10);
  }

const comparePassword = async (password: string, hashedPassword: string) =>{
    return bcrypt.compare(password, hashedPassword);
}

export {generateToken, hashPassword, comparePassword}