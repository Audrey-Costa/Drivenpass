import { SecretNotes } from "@prisma/client";

export type CreateSecretNotes = Omit<SecretNotes, 'id' | 'userId'>