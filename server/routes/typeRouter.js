import { Router } from "express";
import typeController from "../controllers/typeController.js";

const router = Router();

// handling request functions
router.post('/', typeController.create);
router.get('/', typeController.getAll);

export default router