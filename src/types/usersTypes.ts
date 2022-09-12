import { Users } from "@prisma/client";

export type UserRegister = Omit<Users, 'id'>