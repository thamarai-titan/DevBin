import z from "zod"

export const ToolSchema = z.object({
    title: z.string().min(3),
    description: z.string().min(3),
    url: z.string().min(8),
    image: z.string(),
    categoryId: z.string()

})

export type ToolType = z.infer<typeof ToolSchema>