import Joi from "joi";

interface User{

}

const roleSchema = Joi.object({
    role: Joi.string().valid("admin","client", "manager").required().messages({
        "any.only": "Only admin, client and manager are allowed."
    })
})

export{
    roleSchema
}

