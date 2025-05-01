import { Router } from "express";
import { middleware } from "../middleware/middleware.js";
import { controller } from "../controller/controller.js";

const router = Router();

router.post("/create", middleware, controller);

export default router;