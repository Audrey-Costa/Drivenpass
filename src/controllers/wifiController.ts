import { Request, Response } from "express";
import { CreateWifi } from "../types/wifiType";
import * as wifiService from "../services/wifiServices"

export async function createWifi(req: Request, res: Response){
    const newWifi: CreateWifi = req.body;
    const userId: number = res.locals.userId;
    await wifiService.createWifi(newWifi, userId);
    res.sendStatus(201);
}

export async function getAllWifi(req: Request, res: Response) {
    const userId: number = res.locals.userId;
    const wifis = await wifiService.getAllWifi(userId);

    res.status(200).send(wifis)
}

export async function getWifiById(req: Request, res: Response){
    const wifiId: number = Number(req.params.id);
    const userId: number = res.locals.userId;
    const wifi = await wifiService.getWifiById(wifiId, userId)

    res.status(200).send(wifi);
}

export async function deleteWifiById(req: Request, res: Response){
    const wifiId: number = Number(req.params.id);
    const userId: number = res.locals.userId;
    await wifiService.deleteWifiById(wifiId, userId)

    res.sendStatus(200);
}