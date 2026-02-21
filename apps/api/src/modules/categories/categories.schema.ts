import z from "zod";

export const CategoriesSchema = z.object({
    name: z.string().min(1)
})

export type CategoriesType = z.infer<typeof CategoriesSchema>