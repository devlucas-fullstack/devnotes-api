import { Request, Response, NextFunction } from "express";
import prisma from "@/database/prisma";
import { AppError } from "@/utils/AppError";
import { z } from "zod";
import { compare } from "bcrypt";
import { jwtConfig } from "@/config/jwt";
import jwt from "jsonwebtoken";

class SessionController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        email: z.string().email(),
        password: z.string(),
      });

      const { email, password } = bodySchema.parse(req.body);

      const user = await prisma.user.findFirst({ where: { email } });

      if (!user) {
        throw new AppError("E-mail e/ou senha inválidos", 401);
      }

      const matchedPassword = await compare(password, user.password);

      if (!matchedPassword) {
        throw new AppError("E-mail e/ou senha inválidos", 401);
      }

      const { secret, expiresIn } = jwtConfig;
      const token = jwt.sign({ id: user.id }, secret, {
        expiresIn,
        subject: String(user.id),
      });

      res.json({ token, user });
    } catch (error) {
      next(error);
    }
  }
}

export { SessionController };
