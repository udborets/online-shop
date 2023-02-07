import { Router } from "express";
import brandController from "../controllers/brandController.js";

const router = Router();

// handling request functions
router.post('/', brandController.create);
router.get('/', brandController.getAll);


export default router;