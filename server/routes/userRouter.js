import { Router } from "express";
import userConroller from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

// handling request functions
router.post('/registration', userConroller.registration);
router.post('/login', userConroller.login);
router.get('/auth', authMiddleware, userConroller.check);

export default router