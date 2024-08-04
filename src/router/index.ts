import { Router } from "express";
import authRouter from './authRouter'
import userRouter from './userRouter'
import hotelRouter from "./hotelRouter"

const router: Router = Router();

router.use("/auth", authRouter);
router.use("/user", userRouter)
router.use("/hotel", hotelRouter)

export default router