import Joi from "joi";
import { CreateCredencials } from "../types/credentialsType";

export const credentialSchema = Joi.object<CreateCredencials>({
    url: Joi.string().uri().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    title: Joi.string().required()
});