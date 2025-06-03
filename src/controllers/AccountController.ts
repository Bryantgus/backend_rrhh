import { Request, Response } from "express";

export class AccountController {
    static login = async (req: Request, res: Response) => {
        console.log("login");
        res.json("login");
    }

    static register = async (req: Request, res: Response) => {
        console.log("register");
        res.json("register");
    }
}