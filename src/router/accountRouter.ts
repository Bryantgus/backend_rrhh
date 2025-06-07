import { Router } from "express"
import { AccountController } from "../controllers/AccountController"
import { body } from "express-validator"
import { validationsInputRegister } from "../middleware/account"

const router = Router()

router.post('/login', 
    validationsInputRegister,
    AccountController.login)

router.post('/register', 
    validationsInputRegister,
    AccountController.register
)

export default router