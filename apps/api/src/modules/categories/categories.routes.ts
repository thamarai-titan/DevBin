import { Router } from "express";
import { verifyAdmin, verifyToken } from "../../middleware/auth.middleware";
import { CreateCategoriesController } from "./categories.controller";

const router = Router();

router.post("/categories", verifyToken, verifyAdmin, CreateCategoriesController)
export default router