import type {Request, Response} from "express"
import { GetallToolsService } from "./tools.service"
import { responses } from "../../lib/responses";


export const GetallToolsController = async (req: Request, res: Response)=>{
    try {
        const tools = await GetallToolsService();

        res.status(200).json(responses.success({
            tools
        }))
    } catch (error: any) {
        if(error.message === "NO_TOOLS"){
            return res.status(401).json(responses.error("NO_TOOLS"))
        }
        return res.status(500).json(responses.error("INTERNEL_SERVER_ERROR"))
    }
}

