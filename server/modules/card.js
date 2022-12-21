const Joi = require("joi");
const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    name: {type: String, required: true},
    user:{type:String, required:true},
    budget_name: {type: String, required: true},
    spent: {type: Number, required: true},
    available: {type: Number, required: true},
    expires:{type:String,required:true},
    card_type: {type: String, required: true},
    currency:{type:String,required:true},
});


const card=mongoose.model("card",cardSchema);

const validate=(data)=>{
    const schema=Joi.object({
        name:Joi.string().required(),
        user:Joi.string().required(),
        budget_name:Joi.string().required(),
        spent:Joi.number().required(),
        available:Joi.number().required(),
        expires:Joi.string().required(),
        card_type:Joi.string().required(),
        currency:Joi.string().required()
    });

    return schema.validate(data);
}

module.exports={card,validate}
