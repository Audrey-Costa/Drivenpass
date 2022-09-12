import { prisma } from "../config/database"
import { CreateSecretNotes } from "../types/noteType"; 

export async function createNote(newNote: CreateSecretNotes, userId: number){
    await prisma.secretNotes.create({data: {...newNote, userId}})
}

export async function getAllNotes(userId: number) {
    const notes = await prisma.secretNotes.findMany({where: {userId}});
    return notes;
}

export async function getNoteById(id: number){
    const note = await prisma.secretNotes.findUnique({where: {id}})
    return note;
}

export async function deleteNoteById(id: number){
    await prisma.secretNotes.delete({where: {id}})
}