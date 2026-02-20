import { Router } from "express";
import { verifyToken } from "../../middleware/auth.middleware";
import { GetallToolsController, GetToolController } from "./tools.controller";

const router = Router()

router.get("/tools", GetallToolsController)
router.get("/tools/:id", GetToolController)

export default router