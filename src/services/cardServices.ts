import { CreateCards } from "../types/cardType";
import * as cardRepository from "../repositories/cardRepository"
import Cryptr from "cryptr";


export async function createCard(newCard: CreateCards, userId: number){
    newCard.password = crypter(newCard.password, true);
    newCard.securityCode = crypter(newCard.securityCode, true)
    try {
        await cardRepository.createCard(newCard, userId);
    } catch (error) {
        throw {type: "Conflict", message: "Cards already exists"};
    }
}

export async function getAllCards(userId: number) {
    const cards = await cardRepository.getAllCards(userId);
    cards.map((card) => {
        card.password = crypter(card.password, false)
        card.securityCode = crypter(card.securityCode, false)
    });
    if(!cards){
        throw {type: "Not Found", message:"No cards yet"};
    }
    return cards;
}

export async function getCardById(cardId: number, userId: number) {
    const card = await cardRepository.getCardById(cardId);
    if(!card){
        throw {type: "Not Found", message:"No card found"};
    }
    card.password = crypter(card.password, false);
    card.securityCode = crypter(card.securityCode, false);
    if(card.userId === userId){
        return card;
    }else{
        throw {type: "Unauthorized", message: "This id not are valid"};
    }
}

export async function deleteCardById(cardId: number, userId: number) {
    const card = await cardRepository.getCardById(cardId);
    if(!card){
        throw {type: "Not Found", message:"No card found"};
    }
    if(card.userId === userId){
        await cardRepository.deleteCardById(cardId);
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