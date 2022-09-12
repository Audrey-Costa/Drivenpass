import { Router } from "express";
import { createCredential, deleteCredentialById, getAllCredentials, getCredentialById } from "../controllers/credentialsController";
import schemaValidation from "../middlewares/schemaValidationMiddleware";
import { validateToken } from "../middlewares/validateToken";
import { credentialSchema } from "../schemas/credentialSchema";

const credentialsRouter = Router();

credentialsRouter.post("/credentials", validateToken, schemaValidation(credentialSchema),createCredential);
credentialsRouter.get("/credentials", validateToken, getAllCredentials);
credentialsRouter.get("/credentials/:id", validateToken, getCredentialById);
credentialsRouter.delete("/credentials/:id", validateToken, deleteCredentialById);

export default credentialsRouter;