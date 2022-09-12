import { Cards } from "@prisma/client";

export type CreateCards = Omit<Cards, 'id' | 'userId'>