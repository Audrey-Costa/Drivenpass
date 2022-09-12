import { Credentials } from "@prisma/client";

export type CreateCredencials = Omit<Credentials, 'id' | 'userId'>