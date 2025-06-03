import { Request, Response } from "express";

export class PonchesController {

    static getAll = async (req: Request, res: Response) => {
        console.log("obtener todos los ponche");
        res.json("obtener todos los ponche");
    }

    static getPoncheEmployee = async (req: Request, res: Response) => {
        console.log("obtener el ponche de un empleado por id");
        res.json("obtener el ponche de un empleado por id");
    }

    static getHoursxPonche = async (req: Request, res: Response) => {
        console.log("obtiene las horas x ponche ");
        res.json("obtiene las horas x ponche ");
    }

    static ponchar = async (req: Request, res: Response) => {
        console.log("ponchar?");
        res.json("ponchar?");
    }
}