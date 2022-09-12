import { prisma } from "../config/database"
import { UserRegister } from "../types/usersTypes";


export async function findUser(email: string){
    const user = prisma.users.findFirst({where: { email }})

    return user;
}

export async function registerUser(newUser: UserRegister){
    await prisma.users.create({data: newUser })
}