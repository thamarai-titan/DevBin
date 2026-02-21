import type { Request, Response } from "express";
import { CategoriesSchema, type CategoriesType } from "./categories.schema";
import { GetAllCategoriesService } from "./categories.service";
import { responses } from "../../lib/responses";

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
        
    } catch (error) {
        
    }
}