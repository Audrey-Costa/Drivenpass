import { prisma } from "../config/database"
import { CreateCredencials } from "../types/credentialsType";

export async function createCredential(newCredential: CreateCredencials, userId: number){
    await prisma.credentials.create({data: {...newCredential, userId}})
}

export async function getAllCredentials(userId: number) {
    const credentials = await prisma.credentials.findMany({where: {userId}});
    return credentials;
}

export async function getCredentialById(id: number){
    const credential = await prisma.credentials.findUnique({where: {id}})
    return credential;
}