import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const bearer = req.headers.authorization

    if (!bearer) {
        const error = new Error('No Autorizado')
        res.status(401).json({ error: error.message })
        return
    }

    const [, token] = bearer.split(' ')

    if (!token) {
        const error = new Error('Token No Valido')
        res.status(401).json({ error: error.message })
        return
    }

    const result = jwt.verify(token, 'secreto')
    console.log(result)
    next()

}