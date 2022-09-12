import { Request, Response } from "express";
import { UserRegister } from "../types/usersTypes";
import * as authService from "../services/AuthServices"

export async function registerUser(req: Request, res: Response){
    const newUser: UserRegister = req.body;

    await authService.registerUser(newUser);

    res.sendStatus(201)
}