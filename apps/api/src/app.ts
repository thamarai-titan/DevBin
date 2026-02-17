import express from "express"
import type { Request, Response } from "express"
import cors from "cors"
import authRouter from "./modules/auth/auth.routes.ts"

const app = express()

app.use(cors())
app.use(express.json())



app.get("/", (req: Request, res: Response)=>{
    res.status(200).json({
        sucess: true,
        message: "Server is running"
    })
})

app.use("/api", authRouter)

export default app