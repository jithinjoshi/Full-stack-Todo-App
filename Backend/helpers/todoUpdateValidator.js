import Joi from "joi";

const validator = (schema) => (payload) => 
    schema.validate(payload,{abortEarly:false});


const todoSchema = Joi.object({
    title:Joi.string(),
    description:Joi.string().min(3),
    date:Joi.date(),
    id:Joi.string()
})

export const todoUpdatevalidator = validator(todoSchema);