import { Router } from "express";
import { createWifi, deleteWifiById, getWifiById, getAllWifi } from "../controllers/wifiController";
import schemaValidation from "../middlewares/schemaValidationMiddleware";
import { validateToken } from "../middlewares/validateToken";
import { noteSchema } from "../schemas/wifiSchema";

const wifiRouter = Router();

wifiRouter.post("/wifi", validateToken, schemaValidation(noteSchema),createWifi);
wifiRouter.get("/wifi", validateToken, getAllWifi);
wifiRouter.get("/wifi/:id", validateToken, getWifiById);
wifiRouter.delete("/wifi/:id", validateToken, deleteWifiById);

export default wifiRouter;