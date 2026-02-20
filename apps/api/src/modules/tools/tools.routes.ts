import { Router } from "express";
import {
  CreatetoolController,
  DeleteToolController,
  GetallToolsController,
  GetToolController,
  SaveToolController,
  UnsaveToolController,
} from "./tools.controller";
import { verifyAdmin, verifyToken } from "../../middleware/auth.middleware";

const router = Router();

router.get("/tools", GetallToolsController);
router.get("/tools/:id", GetToolController);
router.post("/tools", verifyToken,verifyAdmin,CreatetoolController);


router.delete("/tools/:id", verifyToken, verifyAdmin,  DeleteToolController);
router.post("/saved", verifyToken, SaveToolController);
router.delete("/saved/:toolId", UnsaveToolController);
router.get("/saved", GetallToolsController);

export default router;
