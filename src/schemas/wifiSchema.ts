import Joi from "joi";
import { CreateWifi } from "../types/wifiType";

export const noteSchema = Joi.object<CreateWifi>({
    title: Joi.string().required(),
    password: Joi.string().required(),
    name: Joi.string().required()
})