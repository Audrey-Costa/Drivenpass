import { prisma } from "../config/database"
import { CreateCards } from "../types/cardType";

export async function createCard(newCard: CreateCards, userId: number){
    console.log(newCard)
    await prisma.cards.create({data: {...newCard, userId}})
}

export async function getAllCards(userId: number) {
    const cards = await prisma.cards.findMany({where: {userId}});
    return cards;
}

export async function getCardById(id: number){
    const card = await prisma.cards.findUnique({where: {id}})
    return card;
}

export async function deleteCardById(id: number){
    await prisma.cards.delete({where: {id}})
}