import { Router } from "express";
import { NoteController } from "@/controllers/note-controller";

const noteRoutes = Router();
const noteController = new NoteController();

noteRoutes.post("/", noteController.create);
noteRoutes.get("/", noteController.index);
noteRoutes.put("/:id", noteController.put);

export { noteRoutes };
