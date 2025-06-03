import { Request, Response } from "express";

export class EmployeeController {
    static getAll = async (req: Request, res: Response) => {
        console.log("obtener todos los empleados registrados");
        res.json("obtener todos los empleados registrados");
    }

    static getById = async (req: Request, res: Response) => {
        console.log("obtener un empleado enviando el id");
        res.json("obtener un empleado enviando el id");
    }

    static getHoursById = async (req: Request, res: Response) => {
        console.log("obtiene todas las horas trabajadas por un empleado, enviando el id");
        res.json("obtiene todas las horas trabajadas por un empleado, enviando el id");
    }

    static getSalary = async (req: Request, res: Response) => {
        console.log("obtiene el salario a pagar basandose en el total de horas por el precio de hora del empleado");
        res.json("obtiene el salario a pagar basandose en el total de horas por el precio de hora del empleado");
    }

    static add = async (req: Request, res: Response) => {
        console.log("agrega un empleado nuevo");
        res.json("agrega un empleado nuevo");
    }

    static addHours = async (req: Request, res: Response) => {
        console.log("agrega un registro nuevo de horas usando el id del empleado para asociar las horas")
        res.json("agrega un registro nuevo de horas usando el id del empleado para asociar las horas")
    }

    static update = async (req: Request, res: Response) => {
        console.log("actualiza la informacion del empleado (solo el fullname y pricePerhours)")
        res.json("actualiza la informacion del empleado (solo el fullname y pricePerhours)")
    }

    static delete = async (req: Request, res: Response) => {
        console.log("borra un empleado y todo el registro de las horas trabajadas")
        res.json("borra un empleado y todo el registro de las horas trabajadas")
    }
}