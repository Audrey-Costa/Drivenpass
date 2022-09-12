import { Request, Response } from "express";
import { CreateSecretNotes } from "../types/noteType";
import * as noteService from "../services/noteServices"

export async function createNote(req: Request, res: Response){
    const newNote: CreateSecretNotes = req.body;
    const userId: number = res.locals.userId;
    await noteService.createNote(newNote, userId);
    res.sendStatus(201);
}

export async function getAllNotes(req: Request, res: Response) {
    const userId: number = res.locals.userId;
    const notes = await noteService.getAllNotes(userId);

    res.status(200).send(notes)
}

export async function getNoteById(req: Request, res: Response){
    const noteId: number = Number(req.params.id);
    const userId: number = res.locals.userId;
    const note = await noteService.getNoteById(noteId, userId)

    res.status(200).send(note);
}

export async function deleteNoteById(req: Request, res: Response){
    const noteId: number = Number(req.params.id);
    const userId: number = res.locals.userId;
    await noteService.deleteNoteById(noteId, userId)

    res.sendStatus(200);
}