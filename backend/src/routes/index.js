import { Router } from 'express'
import { registerUser, getUserProfile } from '../controllers/userController.js'
import { loginUser } from '../controllers/authController.js'
import { checkCredentials, verifyToken } from '../middleware/authMiddleware.js'

const router = Router()

router.post('/usuarios', checkCredentials, registerUser)

// Ruta para iniciar sesión
router.post('/login', checkCredentials, loginUser)

router.get('/perfil', verifyToken, getUserProfile)

export default router

