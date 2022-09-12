import { Router } from "express";
import { createNote, deleteNoteById, getAllNotes, getNoteById } from "../controllers/notesController";
import schemaValidation from "../middlewares/schemaValidationMiddleware";
import { validateToken } from "../middlewares/validateToken";
import { noteSchema } from "../schemas/noteSchema";

const notesRouter = Router();
notesRouter.post("/notes", validateToken, schemaValidation(noteSchema),createNote);
notesRouter.get("/notes", validateToken, getAllNotes);
notesRouter.get("/notes/:id", validateToken, getNoteById);
notesRouter.delete("/notes/:id", validateToken, deleteNoteById);


export default notesRouter;