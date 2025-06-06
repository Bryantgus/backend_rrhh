import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const validationsInputRegister = async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all([
        body('user')
            .notEmpty().withMessage('El ususario no puede ir vacio')
            .custom(value => value.length > 2).withMessage("El usuario debe tener mas de 2 caracteres")
            .run(req),
        body('password')
            .isLength({ min: 8 })
            .withMessage("Tu Contraseña debe tener almenos 8 caracteres")
            .run(req),
        body('fullName')
            .notEmpty().withMessage('El nombre completo no puede ir vacio')
            .run(req),
        body('cedula')
            .notEmpty().withMessage('La cedula no puede ir vacio')
            .run(req),
    ])

    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.json({ errors: errors.array() })
        return
    }
    next()
}