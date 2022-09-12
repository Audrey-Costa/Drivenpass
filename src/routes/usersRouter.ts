import { Router } from "express";
import { login, registerUser } from "../controllers/authController";
import schemaValidation from "../middlewares/schemaValidationMiddleware";
import { userSchema } from "../schemas/usersSchema";

const usersRouter = Router();

usersRouter.post("/register", schemaValidation(userSchema), registerUser);
usersRouter.post("/login", schemaValidation(userSchema), login);

export default usersRouter;