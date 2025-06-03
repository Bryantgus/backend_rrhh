import { Request, Response } from "express";

export class CargoController {
    static getAll = async (req: Request, res: Response) => {
        console.log("obtener todos los cargo  registrados")
        res.json("obtener todos los cargo  registrados")
    }

    static getCargoById = async (req: Request, res: Response) => {
        console.log("obtener un cargo enviando el id");
        res.json("obtener un cargo enviando el id")
    }

    static getAllEmployeesByIdCargo= async (req: Request, res:Response) => {
        console.log("obtiene todas los empleado enviando el id del cargo")
        res.json("obtiene todas los empleado enviando el id del cargo")
    }

    static addNewCargo = async (req: Request, res:Response) => {
        console.log("agrega un cargo nuevo")
        res.json("agrega un cargo nuevo")
    }

    static addCargoToEmployee = async (req: Request, res:Response) => {
        console.log("agrega un registro nuevo de cargo usando el id del empleado para asociarlo")
        res.json("agrega un registro nuevo de cargo usando el id del empleado para asociarlo")
    }

    static updateCargoInfo = async (req: Request, res:Response) => {
        console.log("actualiza la informacion del cargo  (solo el titulo y salario)")
        res.json("actualiza la informacion del cargo  (solo el titulo y salario)")
    }

    static deleteCargo = async (req: Request, res:Response) => {
        console.log("borra un cargo siempre y cuando no tenga empleado vinculados")
        res.json("borra un cargo siempre y cuando no tenga empleado vinculados")
    }

}