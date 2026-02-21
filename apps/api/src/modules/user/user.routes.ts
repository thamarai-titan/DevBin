import { Router } from "express";
import { verifyToken } from "../../middleware/auth.middleware";
import { GetUserProfileController } from "./user.controller";

const router = Router()

router.get("/users/:id", verifyToken, GetUserProfileController)


export default router