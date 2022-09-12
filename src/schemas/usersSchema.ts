import Joi from "joi";
import { UserRegister } from "../types/usersTypes";

export const userSchema = Joi.object<UserRegister>({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required()
})