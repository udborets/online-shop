import { Router } from "express";
import brandController from "../controllers/brandController.js";
import checkRole from "../middlewares/checkRoleMiddleware.js";

const router = Router();

// handling request functions
router.post('/', checkRole("ADMIN"), brandController.create);
router.get('/', brandController.getAll);


export default router;