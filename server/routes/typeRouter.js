import { Router } from "express";
import typeController from "../controllers/typeController.js";
import checkRole from "../middlewares/checkRoleMiddleware.js";

const router = Router();

// handling request functions
router.post('/', checkRole("ADMIN"), typeController.create);
router.get('/', typeController.getAll);

export default router