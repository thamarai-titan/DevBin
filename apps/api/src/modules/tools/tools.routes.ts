import { Router } from "express";
import { verifyToken } from "../../middleware/auth.middleware";
import { GetallToolsController } from "./tools.controller";

const router = Router()

router.get("/tools", GetallToolsController)

export default router