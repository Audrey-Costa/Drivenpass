import { Request, Response } from "express";
import { CreateCards } from "../types/cardType";
import * as cardService from "../services/cardServices"

export async function createCard(req: Request, res: Response){
    const newCard: CreateCards = req.body;
    const userId: number = res.locals.userId;
    await cardService.createCard(newCard, userId);
    res.sendStatus(201);
}

export async function getAllCards(req: Request, res: Response) {
    const userId: number = res.locals.userId;
    const cards = await cardService.getAllCards(userId);

    res.status(200).send(cards)
}

export async function getCardById(req: Request, res: Response){
    const cardId: number = Number(req.params.id);
    const userId: number = res.locals.userId;
    const card = await cardService.getCardById(cardId, userId)

    res.status(200).send(card);
}

export async function deleteCardById(req: Request, res: Response){
    const cardId: number = Number(req.params.id);
    const userId: number = res.locals.userId;
    await cardService.deleteCardById(cardId, userId)

    res.sendStatus(200);
}