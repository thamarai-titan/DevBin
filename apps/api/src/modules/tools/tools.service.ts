import { prisma } from "../../lib/prisma"


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