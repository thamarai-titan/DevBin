import type { Request, Response } from "express"
import { RegisterSchema, type RegisterType } from "./auth.schema"
import { checkEmail, RegisterService } from "./auth.service"
import { responses } from "../../lib/responses"

export const RegisterController = async (req:Request, res:Response)=> {
    try {
        const data: RegisterType = RegisterSchema.parse(req.body)
        const emailsExsists = await checkEmail(data.email)

        if(emailsExsists){
            res.status(400).json(responses.error("EMAIL ALREADY EXSISTS"))
        }
        const user = await RegisterService(data)

        res.status(201).json(responses.success(user))

    } catch (error) {
        
    }
}