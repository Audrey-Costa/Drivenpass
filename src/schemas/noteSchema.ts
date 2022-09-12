import Joi from "joi";
import { CreateSecretNotes } from "../types/noteType";

export const noteSchema = Joi.object<CreateSecretNotes>({
    title: Joi.string().max(50).required(),
    note: Joi.string().max(1000).required()
})