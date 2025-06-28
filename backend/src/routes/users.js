import { Router } from "express"
import { registerUser, getUser } from "../controllers/usersController.js"
import authMiddleware from "../middlewares/authMiddleware.js"

const router = Router()

router.post("/", registerUser)
router.get("/", authMiddleware, getUser)

export default router
