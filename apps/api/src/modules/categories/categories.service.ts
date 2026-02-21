import { ca } from "zod/v4/locales";
import { prisma } from "../../lib/prisma"
import type { CategoriesType } from "./categories.schema"


export const GetAllCategoriesService = async ()=>{
    try {
        
        const categories = await prisma.category.findMany({
            select: {
                id: true,
                name: true
            }
        });

        return categories
    } catch (error) {
        throw error        
    }
}

export const CreateCategoriesService = async (data: CategoriesType) => {
    try {
        const {
            name
        } = data

        const categorie = await prisma.category.create({
            data: {
                name
            }
        })

        return categorie
    } catch (error) {
        throw error
    }
}