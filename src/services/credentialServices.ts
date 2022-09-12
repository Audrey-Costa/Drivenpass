import { CreateCredencials } from "../types/credentialsType";
import * as credentialRepository from "../repositories/credentialRepository"
import Cryptr from "cryptr";


export async function createCredential(newCredential: CreateCredencials, userId: number){
    newCredential.password = crypter(newCredential.password, true);
    try {
        await credentialRepository.createCredential(newCredential, userId);
    } catch (error) {
        throw {type: "Conflict", message: "Credentials already exists"};
    }
}

export async function getAllCredentials(userId: number) {
    const credentials = await credentialRepository.getAllCredentials(userId);
    credentials.map((credential) => {
        credential.password = crypter(credential.password, false)});
    if(!credentials){
        throw {type: "Not Found", message:"No credentials yet"};
    }
    return credentials;
}

export async function getCredentialById(credentialId: number, userId: number) {
    const credential = await credentialRepository.getCredentialById(credentialId);
    if(!credential){
        throw {type: "Not Found", message:"No credential found"};
    }
    credential.password = crypter(credential.password, false);
    if(credential.userId === userId){
        return credential;
    }else{
        throw {type: "Unauthorized", message: "This id not are valid"};
    }
}

export function crypter(CVC: string, encrypt: boolean): string{
    const cryptr = new Cryptr('secretKey');
    if(encrypt){
        const encript = cryptr.encrypt(CVC);
        return encript;
    }else{
        const decrypt = cryptr.decrypt(CVC);
        return decrypt;
    }

}