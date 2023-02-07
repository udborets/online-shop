import { Router } from "express";
import userConroller from "../controllers/userController.js";
const router = Router();

// handling request functions
router.post('/registration', userConroller.registration);
router.post('/login', userConroller.login);
router.get('/auth', userConroller.check);

export default router