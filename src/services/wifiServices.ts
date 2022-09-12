import { CreateWifi } from "../types/wifiType";
import * as wifiRepository from "../repositories/wifiRepository"
import Cryptr from "cryptr";


export async function createWifi(newWifi: CreateWifi, userId: number){
    newWifi.password = crypter(newWifi.password, true);
    try {
        await wifiRepository.createWifi(newWifi, userId);
    } catch (error) {
        throw {type: "Conflict", message: "Wifi already exists"};
    }
}

export async function getAllWifi(userId: number) {
    const wifi = await wifiRepository.getAllWifi(userId);
    wifi.map((wifi) => {
        wifi.password = crypter(wifi.password, false)});
    if(!wifi){
        throw {type: "Not Found", message:"No wifi yet"};
    }
    return wifi;
}

export async function getWifiById(wifiId: number, userId: number) {
    const wifi = await wifiRepository.getWifiById(wifiId);
    if(!wifi){
        throw {type: "Not Found", message:"No wifi found"};
    }
    wifi.password = crypter(wifi.password, false);
    if(wifi.userId === userId){
        return wifi;
    }else{
        throw {type: "Unauthorized", message: "This id not are valid"};
    }
}

export async function deleteWifiById(wifiId: number, userId: number) {
    const wifi = await wifiRepository.getWifiById(wifiId);
    if(!wifi){
        throw {type: "Not Found", message:"No wifi found"};
    }
    if(wifi.userId === userId){
        await wifiRepository.deleteWifiById(wifiId);
    }else{
        throw {type: "Unauthorized", message: "This id not are valid"};
    }
}

export function crypter(CVC: string, encrypt: boolean): string{
    const cryptr = new Cryptr('secretKey');
    if(encrypt){
        const encript = cryptr.encrypt(CVC);
        return encript;
    }else{
        const decrypt = cryptr.decrypt(CVC);
        return decrypt;
    }

}