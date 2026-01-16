import { Router } from "express";
import { NoteController } from "@/controllers/note-controller";

const noteRoutes = Router();
const noteController = new NoteController();

noteRoutes.post("/", noteController.create);

export { noteRoutes };
