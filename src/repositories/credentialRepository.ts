import { prisma } from "../config/database"
import { CreateCredencials } from "../types/credentialsType";

export async function createCredential(newCredential: CreateCredencials, userId: number){
    await prisma.credentials.create({data: {...newCredential, userId}})
}