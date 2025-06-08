import { Request, Response } from "express";
import User from "../models/user";
import { generateJWT } from "../utils/jwt";

export class AccountController {
    static login = async (req: Request, res: Response) => {
        console.log("login");
        const { user, password } = req.body;
        console.log(user, password);

        // Buscar usuario en la base
        const userExist = await User.findOne({ where: { user: user } });

        if (!userExist) {
            // Si no existe el usuario
            res.status(404).json({ error: "El Usuario no existe" });
            return;
        }

        // Comparar password recibida con la guardada (en texto plano, no recomendado)
        if (password !== userExist.password) {
            res.status(400).json({ error: "Contraseña incorrecta" });
            return;
        }

        const token = generateJWT({ user: userExist.user });

        res.json({ token });
    };

    static register = async (req: Request, res: Response) => {
        console.log("register");
        const { user, password } = req.body
        const sameCedula = await User.findOne({ where: { user } })

        if (sameCedula) {
            const error = new Error("Un usuario con ese nombre ya esta registrado")
            res.status(409).json({ error: error.message })
            return
        }

        await User.create({
            user: user,
            cedula: user,
            password: password
        })
        res.json("Usuario creado correctamente")
        return
    }
}