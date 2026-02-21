import { prisma } from "../../lib/prisma";

export const GetUserProfileService = async (userId: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        savedTools: {
          select: {
            tool: {
              select: {
                id: true,
                title: true,
                description: true,
                url: true,
                image: true,
                category: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return user
  } 
  catch (error) {
    throw error
  }
};
