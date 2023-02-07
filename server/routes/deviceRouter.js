import { Router } from "express";
import deviceController from "../controllers/deviceController.js";
import checkRole from "../middlewares/checkRoleMiddleware.js";

const router = Router();

// handling request functions
router.post('/', checkRole("ADMIN"), deviceController.create);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);

export default router;