import Joi from "joi";

interface User {
    firstName: string;
    lastName: string;
    phone: number;
    profilePicture: string;
    gender: "male" | "female";
    birthDate: string;
    language: string;
}

const roleSchema = Joi.object({
    role: Joi.string().valid("admin", "client", "manager").required().messages({
        "any.only": "Only admin, client and manager are allowed."
    })
})

const userSchema = Joi.object<User>({
    firstName: Joi.string().messages({
        "any.required": "first Name is required"
    }),
    lastName: Joi.string().messages({
        "any.required": "last name is required"
    }),
    phone: Joi.number().messages({
        "number.base": "phone number should be a type of number",
        "any.required": "phone is required"
    }),
    profilePicture: Joi.string().uri().optional().messages({
        "string.base": "profilePicture should be a type of text",
        "string.uri": "profilePicture must be a valid URI"
    }),
    gender: Joi.string().valid("male", "female", "other").messages({
        "string.base": "gender must be one of [male, female, other]",
        "any.required": "gender is required"
    }),
    birthDate: Joi.date().iso().messages({
        "date.base": "birthDate should be a valid date",
        "date.iso": "birthDate must be in ISO format",
        "any.required": "birthDate is required"
    }),
    language: Joi.string().messages({
        "any.required": "language is required"
    })
})

export {
    roleSchema,
    userSchema
}

