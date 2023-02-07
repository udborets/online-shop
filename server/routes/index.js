import { Router } from "express";

import brandRouter from "./brandRouter.js";
import userRouter from "./userRouter.js";
import deviceRouter from "./deviceRouter.js";
import typeRouter from "./typeRouter.js";

const router = Router();

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

export default router