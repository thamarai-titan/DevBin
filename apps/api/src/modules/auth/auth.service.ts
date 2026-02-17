import { prisma } from "../../lib/prisma";
import type { RegisterType } from "./auth.schema";
import bcrypt from "bcrypt";

export const checkEmail = async (email: string) => {
  try {
    const emailExsists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (emailExsists) {
      return true;
    }

    return false;
  } catch (error) {
    throw error;
  }
};

export const RegisterService = async (data: RegisterType) => {
  try {
    const { username, email, password } = data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: username,
        email: email,
        password: hashedPassword,
      },
    });

    return user;
  } catch (error) {
    throw error;
  }
};
