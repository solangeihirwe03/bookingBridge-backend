import Joi from "joi";

const addressSchema = Joi.object({
    address: Joi.string().required().messages({
        "string.base": "Address must be a string",
        "any.required": "Address is required"
    }),
    city: Joi.string().required().messages({
        "string.base": "City must be a string",
        "any.required": "City is required"
    }),
    postalCode: Joi.string().pattern(/^[0-9]{5}$/).required().messages({
        "string.base": "Postal Code must be a string",
        "string.pattern.base": "Postal Code must be a 5-digit number",
        "any.required": "Postal Code is required"
    }),
}).unknown(true);

const contactInfoSchema = Joi.object({
    website: Joi.string().uri().optional().messages({
      'string.uri': 'Website must be a valid URL',
    }),
    email: Joi.string().email().optional().messages({
      'string.email': 'Email must be a valid email address',
    }),
    telephone: Joi.string().pattern(/^\+?[1-9]\d{1,14}$/).optional().messages({
      'string.pattern.base': 'Telephone number must be in a valid format',
    }),
  });

const hotelSchema = Joi.object({
    hotelName: Joi.string().required().messages({
        "string.base": "Name must be a string",
        "any.required": "Name is required",
    }),
    hotelImage: Joi.array().min(4).max(8).required().messages({
        "array.base": "Images must be array of 4 images",
        "array.min": "images must be atleast 4 images",
        "array.max": "max image is 8 images",
        "any.required": "hotelImage is required"
    }),
    hotelDescription: Joi.string().required().messages({
        "string.base": "hotel description must be string",
        "any.required": "hotelDescription is required"
    }),
    address: addressSchema.optional(),
    contact: contactInfoSchema.optional()
})

export {
    hotelSchema
}