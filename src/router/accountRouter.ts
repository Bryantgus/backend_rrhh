import { Router } from "express"
import { AccountController } from "../controllers/AccountController"

const router = Router()

router.post('/login', AccountController.login)

router.post('/register', AccountController.register)

export default router