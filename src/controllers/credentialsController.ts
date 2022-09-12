import { Request, Response } from "express";
import { CreateCredencials } from "../types/credentialsType";
import * as credentialService from "../services/credentialServices"

export async function createCredential(req: Request, res: Response){
    const newCredential: CreateCredencials = req.body;
    const userId = res.locals.userId;
    await credentialService.createCredential(newCredential, userId);
    res.sendStatus(201);
}