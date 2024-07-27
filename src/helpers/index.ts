import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken"

dotenv.config()

const generateToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET ||"secret");
  };

  const decodeToken = (token: string)=>{
    return jwt.verify(token, process.env.JWT_SECRET || "secret") as JwtPayload
  }

const hashPassword = (password: string)=>{
    return bcrypt.hashSync(password, 10);
  }

const comparePassword = async (password: string, hashedPassword: string) =>{
    return bcrypt.compare(password, hashedPassword);
}

export {generateToken, hashPassword, comparePassword, decodeToken}