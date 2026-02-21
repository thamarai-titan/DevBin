import type { Request, Response } from "express";
import { CategoriesSchema, type CategoriesType } from "./categories.schema";
import { CreateCategoriesService, GetAllCategoriesService } from "./categories.service";
import { responses } from "../../lib/responses";
import { Prisma } from "@prisma/client";

export const GetAllCategoriesController = async (req: Request, res: Response) => {
  try {
    const categories = await GetAllCategoriesService();
    if (!categories) {
      return res.status(404).json(responses.error("NO_DATA"));
    }
    res.status(200).json(
      responses.success({
        categories,
      }),
    );
  } catch (error) {
    return res.status(500).json(responses.error("INTERNEL_SERVER_ERROR"));
  }
};


export const CreateCategoriesController = async (req: Request, res: Response) => {
    try {
        const data: CategoriesType = CategoriesSchema.parse(req.body)

        const categories = await CreateCategoriesService(data)

        res.status(201).json(responses.success({
            categories
        }))


    } catch (error: any) {
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            if(error.code === "P2002"){
                return res.status(400).json(responses.error("PRISMA_ERROR"))
            }
        }

        return res.status(500).json(responses.error("INTERNEL_SERVER_ERROR"))
    }
}