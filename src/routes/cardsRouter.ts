import { Router } from "express";
import { createCard, getAllCards, getCardById, deleteCardById} from "../controllers/cardController";
import schemaValidation from "../middlewares/schemaValidationMiddleware";
import { validateToken } from "../middlewares/validateToken";
import { cardSchema } from "../schemas/cardSchema";

const cardsRouter = Router();

cardsRouter.post("/cards", validateToken, schemaValidation(cardSchema),createCard);
cardsRouter.get("/cards", validateToken, getAllCards);
cardsRouter.get("/cards/:id", validateToken, getCardById);
cardsRouter.delete("/cards/:id", validateToken, deleteCardById);

export default cardsRouter;