import { Router } from "express";
import { RegisterController } from "./auth.controller";

const router = Router()


router.post("/auth/register", RegisterController)


export default router