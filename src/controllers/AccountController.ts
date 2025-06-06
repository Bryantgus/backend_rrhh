import { Request, Response } from "express";
import User from "../models/user";

export class AccountController {
    static login = async (req: Request, res: Response) => {
        console.log("login");
        res.json("login");
    }

    static register = async (req: Request, res: Response) => {
        console.log("register");
        const { cedula, fullName, password } = req.body
        const sameCedula = await User.findOne({ where: {cedula} })

        if (sameCedula) {
            const error = new Error("Un usuario con esa cedula ya esta registrado")
            res.status(409).json({ error: error.message })
            return
        }

        await User.create({
            fullName: fullName,
            cedula: cedula,
            password: password
        })
        res.json("Usuario creado correctamente")
        return
    }
}