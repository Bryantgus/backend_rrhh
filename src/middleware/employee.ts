import { Request, Response, NextFunction } from "express";
import { body, param, validationResult } from "express-validator";
import Employee from "../models/employee";

declare global {
    namespace Express {
        interface Request {
            employee: Employee
        }
    }
}

export const validateEmployeeExist = async (req: Request, res: Response, next: NextFunction) => {
    await param('idEmployee').isInt().withMessage('Id debe ser un numero')
        .custom(value => value > 0).withMessage('Id debe ser mayor a 0')
        .run(req)

    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() })
        return
    }
    next()
}

export const validatefullName = async (req: Request, res: Response, next: NextFunction) => {
    await body('fullName')
            .notEmpty().withMessage('El nombre del empleado no puede ir vacio')
            .run(req)

    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() })
        return
    }
    next()
}