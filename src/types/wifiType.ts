import { Wifi } from "@prisma/client";

export type CreateWifi = Omit<Wifi, 'id' | 'userId'>