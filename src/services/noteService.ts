import { CreateSecretNotes } from "../types/noteType";
import * as noteRepository from "../repositories/noteRepository";


export async function createNote(newNote: CreateSecretNotes, userId: number){
    try {
        await noteRepository.createNote(newNote, userId);
    } catch (error) {
        throw {type: "Conflict", message: "Notes already exists"};
    }
}

export async function getAllNotes(userId: number) {
    const notes = await noteRepository.getAllNotes(userId);
    if(!notes){
        throw {type: "Not Found", message:"No note yet"};
    }
    return notes;
}

export async function getNoteById(noteId: number, userId: number) {
    const note = await noteRepository.getNoteById(noteId);
    if(!note){
        throw {type: "Not Found", message:"No note found"};
    }
    if(note.userId === userId){
        return note;
    }else{
        throw {type: "Unauthorized", message: "This id not are valid"};
    }
}

export async function deleteNoteById(noteId: number, userId: number) {
    const note = await noteRepository.getNoteById(noteId);
    if(!note){
        throw {type: "Not Found", message:"No note found"};
    }
    if(note.userId === userId){
        await noteRepository.deleteNoteById(noteId);
    }else{
        throw {type: "Unauthorized", message: "This id not are valid"};
    }
}
