import { Request, Response } from "express";
import { CreateCredencials } from "../types/credentialsType";
import * as credentialService from "../services/credentialServices"

export async function createCredential(req: Request, res: Response){
    const newCredential: CreateCredencials = req.body;
    const userId: number = res.locals.userId;
    await credentialService.createCredential(newCredential, userId);
    res.sendStatus(201);
}

export async function getAllCredentials(req: Request, res: Response) {
    const userId: number = res.locals.userId;
    const credentials = await credentialService.getAllCredentials(userId);

    res.status(200).send(credentials)
}

export async function getCredentialById(req: Request, res: Response){
    const credentialId: number = Number(req.params.id);
    const userId: number = res.locals.userId;
    const credential = await credentialService.getCredentialById(credentialId, userId)

    res.status(200).send(credential);
}

export async function deleteCredentialById(req: Request, res: Response){
    const credentialId: number = Number(req.params.id);
    const userId: number = res.locals.userId;
    await credentialService.deleteCredentialById(credentialId, userId)

    res.sendStatus(200);
}