import { Request, Response } from "express";
import prisma from "@/database/prisma";
import { z } from "zod";
import { hash } from "bcrypt";
import { AppError } from "@/utils/AppError";

class UserController {
  async create(req: Request, res: Response) {
    const bodySchema = z.object({
      name: z.string().min(2, { message: "Informe seu nome" }),
      email: z.string().email({ message: "Informe um e-mail válido" }),
      password: z
        .string()
        .min(6, { message: "Senha deve ter no mínimo 6 dígitos" }),
    });

    const { email, name, password } = bodySchema.parse(req.body);

    const hashedPassword = await hash(password, 8);

    const userWithSameEmail = await prisma.user.findFirst({ where: { email } });

    if (userWithSameEmail) {
      throw new AppError("Endereço de e-mail já existe!");
    }

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json();
  }
}

export { UserController };
