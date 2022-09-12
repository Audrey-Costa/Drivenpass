import { CreateCredencials } from "../types/credentialsType";
import { parseJwt } from "../utils/tokenUtils";
import * as credentialRepository from "../repositories/credentialRepository"


export async function createCredential(newCredential: CreateCredencials, userId: number){
    try {
        await credentialRepository.createCredential(newCredential, userId);
    } catch (error) {
        throw {type: "Conflict", message: "Credentials already exists"}
    }
}