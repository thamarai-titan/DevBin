import type { Request, Response } from "express"
import { RegisterSchema, type RegisterType } from "./auth.schema"
import { checkEmail, RegisterService } from "./auth.service"

export const RegisterController = async (req:Request, res:Response)=> {
    try {
        const data: RegisterType = RegisterSchema.parse(req.body)
        const emailsExsists = await checkEmail(data.email)

        if(emailsExsists){
            
        }
        const user = await RegisterService(data)


    } catch (error) {
        
    }
}