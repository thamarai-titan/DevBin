import type {Request, Response} from "express"
import { GetUserProfileService } from "./user.service"
import { responses } from "../../lib/responses"

export const GetUserProfileController = async (req: Request, res: Response) => {
    try {
        const userId = req.userId
        const user = await GetUserProfileService(userId)
        if(!user){
            res.status(400).json(responses.error("NO_DATA_FOUND"))
        }
        res.status(200).json(responses.success({
            user
        }))
    } catch (error) {
        res.status(500).json(responses.error("INTERNAL_SERVER_ERROR"))
    }
}