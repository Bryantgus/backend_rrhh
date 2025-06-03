import { Request, Response } from "express";

export class SalariosRouter {
    static getAll = async (req: Request, res: Response) => {
        console.log("obtener todos los salarios  por cargo");
        res.json("obtener todos los salarios  por cargo");
    }

    static addSalaryToCargo = async (req: Request, res: Response) => {
        console.log("agrega un salario a un cargo");
        res.json("agrega un salario a un cargo");
    }

    static addNewSalary = async (req: Request, res: Response) => {
        console.log("agrega un registro nuevo de salario");
        res.json("agrega un registro nuevo de salario");
    }

    static deleteSalary = async (req: Request, res: Response) => {
        console.log("borra un salarios  siempre y cuando no tenga cargo vinculados");
        res.json("borra un salarios  siempre y cuando no tenga cargo vinculados");
    }
}