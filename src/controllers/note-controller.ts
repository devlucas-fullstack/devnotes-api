import { Request, Response, NextFunction } from "express";
import prisma from "@/database/prisma";
import { z } from "zod";
import { AppError } from "@/utils/AppError";

const categoryEnum = z.enum(["professional", "guys", "workouts"]);

class NoteController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        description: z.string(),
        category: categoryEnum,
      });

      const { description, category } = bodySchema.parse(req.body);

      if (!req.user.id) {
        throw new AppError("Não autorizado", 401);
      }

      await prisma.note.create({
        data: {
          description,
          category,
          userId: req.user.id,
        },
      });

      res.status(201).json();
    } catch (error) {
      next(error);
    }
  }
}

export { NoteController };
