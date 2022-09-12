import { Users } from "@prisma/client";

export type UserAuth = Omit<Users, 'id'>