import { Router } from "express";
import { userRoutes } from "./user-routes";
import { sessionRoutes } from "./session-routes";
import { noteRoutes } from "./note-routes";
import { authMiddleware } from "@/middlewares/auth-middleware";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/sessions", sessionRoutes);

routes.use(authMiddleware);
routes.use("/notes", noteRoutes);

export { routes };
