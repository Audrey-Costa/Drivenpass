import Joi from "joi";
import { CreateCards } from "../types/cardType";

export const cardSchema = Joi.object<CreateCards>({
    cardNumber: Joi.string().regex(/([0-9]{11})/).required(),
    name: Joi.string().required(),
    securityCode: Joi.string().regex(/([0-9]{3})/).required(),
    password: Joi.string().required(),
    expiresAt: Joi.date().required(),
    isVirtual: Joi.boolean().required(),
    type: Joi.string().valid("credit", "debit", "both").required(),
    title: Joi.string().required(),
});