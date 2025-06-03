import { Request, Response } from "express";

export class NominaController {
    static getAll = async (req: Request, res: Response) => {
        console.log("obtener todas las nominas")
        res.json("obtener todas las nominas")
    }

    static getAllByIdEmployee = async (req: Request, res: Response) => {
        console.log("obtener las nominas del empleado enviando el id del empleado")
        res.json("obtener las nominas del empleado enviando el id del empleado")
    }

    static getOneByIdEmployee = async (req: Request, res: Response) => {
        console.log("obtiene una nomina en particular por empleado ")
        res.json("obtiene una nomina en particular por empleado ")
    }

    static create = async (req: Request, res: Response) => {
        console.log("Crear nomina")
        res.json("Crear nomina")
    }
}