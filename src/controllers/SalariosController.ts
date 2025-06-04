import { Request, Response } from "express";
import Salario from "../models/salario";
import Cargo from "../models/cargo";

export class SalariosRouter {
    static getAll = async (req: Request, res: Response) => {
        console.log("obtener todos los salarios  por cargo");
        try {
            const cargosConSalario = await Salario.findAll({
                include: [{ model: Cargo }]
            });

            res.json(cargosConSalario);
        } catch (error) {
            // console.log(error);
            res.status(500).json({ error: 'Hubo un error' })
        }
    }

    static addSalaryToCargo = async (req: Request, res: Response) => {
        console.log("agrega un salario a un cargo");
        try {
            const idSalario = req.params.idSalario
            const salarioExists = await Salario.findByPk(idSalario)
            if (!salarioExists) {
                res.status(404).json({ error: 'Salario no encontrado' });
                return
            }
            const idCargo = req.params.idCargo
            const cargoExists = await Cargo.findByPk(idCargo)
            if (!cargoExists) {
                res.status(404).json({ error: 'Cargo no encontrado' });
                return
            }

            cargoExists.salarioId = salarioExists.id

            await cargoExists.save()

            res.json({
                message: 'Salario asignado correctamente al cargo',
                cargo: cargoExists
            });


        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Hubo un error' })
        }
    }

    static addNewSalary = async (req: Request, res: Response) => {
        try {
            const salario = req.body.salario
            await Salario.create({ salario: salario })
            res.json('Salario Agregado correctamente')


        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Hubo un error' })
        }
    }

    static deleteSalary = async (req: Request, res: Response) => {
        console.log("borra un salarios  siempre y cuando no tenga cargo vinculados");
        try {
            const idSalario = req.params.idSalario;

            const salario = await Salario.findByPk(idSalario);
            if (!salario) {
                res.status(404).json({ error: "Salario no encontrado" });
                return 
            }

            // Buscar si algún Cargo lo está utilizando
            const cargoConEsteSalario = await Cargo.findOne({
                where: { salarioId: idSalario }
            });

            if (cargoConEsteSalario) {
                res.status(400).json({ error: "No se puede eliminar el salario porque está vinculado a un cargo" });
                return 
            }

            await salario.destroy();
            res.json({ message: "Salario eliminado correctamente" });
        } catch (error) {
            // console.log(error);
            res.status(500).json({ error: 'Hubo un error' })
        }
    }
}