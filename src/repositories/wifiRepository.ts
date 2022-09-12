import { prisma } from "../config/database"
import { CreateWifi } from "../types/wifiType";

export async function createWifi(newWifi: CreateWifi, userId: number){
    await prisma.wifi.create({data: {...newWifi, userId}})
}

export async function getAllWifi(userId: number) {
    const wifi = await prisma.wifi.findMany({where: {userId}});
    return wifi;
}

export async function getWifiById(id: number){
    const wifi = await prisma.wifi.findUnique({where: {id}})
    return wifi;
}

export async function deleteWifiById(id: number){
    await prisma.wifi.delete({where: {id}})
}