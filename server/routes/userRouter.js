import { Router } from "express";
import userConroller from "../controllers/userConroller.js";
const router = Router();

router.post('/registration', userConroller.registration)
router.post('/login', userConroller.login)
router.get('/auth', userConroller.check)

export default router