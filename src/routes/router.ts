import { Router } from "express";
import cardsRouter from "./cardsRouter";
import credentialsRouter from "./credentialsRouter";
import notesRouter from "./notesRouter";
import usersRouter from "./usersRouter";
import wifiRouter from "./wifiRouter";

const router = Router();

router.use(usersRouter, credentialsRouter, notesRouter, cardsRouter, wifiRouter);

export default router;