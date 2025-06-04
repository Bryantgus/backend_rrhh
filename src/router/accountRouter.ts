import { Router } from "express"
import { AccountController } from "../controllers/AccountController"
import { body } from "express-validator"

const router = Router()

router.post('/login', AccountController.login)

router.post('/register', 
    body('user')
        .notEmpty().withMessage('El ususario no puede ir vacio')
        .custom(value => value.lenght > 2).withMessage("El usuario debe tener mas de 2 caracteres"),
    body('password')
        .notEmpty().withMessage('El ususario no puede ir vacio')
        .custom(value => value.lenght > 7).withMessage("El usuario debe tener minimo 8 caracteres"),
    body('name')
        .notEmpty().withMessage('El nombre no puede ir vacio'),
    body('lastName')
        .notEmpty().withMessage('El apellido no puede ir vacio'),
    AccountController.register
)

export default router