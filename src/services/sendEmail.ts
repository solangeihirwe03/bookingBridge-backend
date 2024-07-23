import nodeMailer, {SendMailOptions} from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_HOST_PORT),
    secure: true,
    auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MP
    }
})

const sendEmail = async(email: string, subject: string, message: string)=>{
    try{
        const mailOptions : SendMailOptions = {
            from: process.env.MAIL_ID,
            to: email,
            subject: subject,
            text: message 
        }

        await transporter.sendMail(mailOptions)
    }
    catch(error: any){
        throw new Error(error);
    }
}

export {transporter, sendEmail}