import { prisma } from "../../lib/prisma"
import type { ToolType } from "./tools.schema";


export const GetallToolsService = async ()=>{
    try {
        const tools = prisma.tool.findMany();

        if(!tools){
            throw new Error("NO_TOOLS")
        }

        return tools
    } catch (error) {
        throw error
    }
}

export const GettoolService = async (toolId: string) => {
    try {
        const tool = await prisma.tool.findUnique({
            where: {
                id: toolId
            }
        })

        return tool

    } catch (error) {
        throw error
    }
}

export const CreateToolService = async (data: ToolType) => {
try {
    const {
        title,
        description,
        url,
        image,
        categoryId
    } = data

    const tool = await prisma.tool.create({
        data: {
            title,
            description,
            url,
            image,
            categoryId
        }
    })

    return tool
} catch (error) {
    throw error
}
}

export const DeleteToolService = async (toolId: string) => {
    try {
        const tool = await prisma.tool.delete({
            where: {
                id: toolId
            }
        })
        return tool
    } catch (error) {
        throw error
    }
}

export const SaveToolService = async (toolId: string, userId: string) => {
try {
    const savedTool = await prisma.savedTool.create({
        data : {
            user: {
                connect: { id: userId }
            },
            tool: {
                connect: { id: toolId }
            }
        }
    })
    return savedTool

} catch (error) {
    throw error
}
}

export const UnsaveToolService = async (toolId: string, userId: string) => {
    try {
        const unsavetool = await prisma.savedTool.delete({
            where: {
                userId_toolId: {
                    userId,
                    toolId
                }
            }
        })
        return unsavetool
    } catch (error) {
        throw error
    }
}

export const GetAllSavedToolsService = async () => {
    try {
        const savedTools = await prisma.savedTool.findMany()
    } catch (error) {
        throw error
    }
}