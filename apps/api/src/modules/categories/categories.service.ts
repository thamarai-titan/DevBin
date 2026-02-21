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