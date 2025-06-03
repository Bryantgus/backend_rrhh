import { Request, Response } from "express";
import Cargo from "../models/cargo";
import Employee from "../models/employee";

export class CargoController {
    static getAll = async (req: Request, res: Response) => {
        console.log("obtener todos los cargo  registrados")
        try {
            const allCargos = await Cargo.findAll()
            res.json(allCargos)
            return
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Hubo un error' })
        }
    }

    static getCargoById = async (req: Request, res: Response) => {
        console.log("obtener un cargo enviando el id");
        try {
            const id = req.params.idCargo
            const cargoExist = await Cargo.findByPk(id)
            if (!cargoExist) {
                res.status(404).json({ error: 'Cargo no encontrado' });
                return
            }
            res.json(cargoExist)
            return
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Hubo un error' })
            return
        }
    }

    static getAllEmployeesByIdCargo = async (req: Request, res: Response) => {
        console.log("obtiene todas los empleado enviando el id del cargo")
        try {
            const cargoId = req.params.idCargo
            const cargoExist = await Cargo.findByPk(cargoId)
            if (!cargoExist) {
                res.status(404).json({ error: 'Cargo no encontrado' });
                return
            }

            const empleados = await Employee.findAll({
                where: {
                    cargoId: cargoId
                }
            });

            res.json({
                [cargoExist.cargo]: empleados
            })
            return

        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Hubo un error' })
            return
        }
    }

    static addNewCargo = async (req: Request, res: Response) => {
        console.log("agrega un cargo nuevo")
        try {
            const cargoName = req.body.cargo;

            const cargoExist = await Cargo.findOne({
                where: { cargo: cargoName }
            });

            if (cargoExist) {
                res.status(400).json({ error: 'El cargo ya existe' });
                return
            }

            const newCargo = await Cargo.create({ cargo: cargoName })
            res.json({
                message: 'Cargo creado correctamente',
                cargo: newCargo
            })
            return

        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Hubo un error' })
            return
        }
    }

    static addCargoToEmployee = async (req: Request, res: Response) => {
        console.log("agrega un registro nuevo de cargo usando el id del empleado para asociarlo")
        try {
            const cargoId = req.params.idCargo
            const cargoExist = await Cargo.findByPk(cargoId)
            if (!cargoExist) {
                res.status(404).json({ error: 'Cargo no encontrado' });
                return
            }

            const empleadoId = req.params.idEmpleado
            const empleadoExist = await Employee.findByPk(empleadoId)
            if (!empleadoExist) {
                res.status(404).json({ error: 'Empleado no encontrado' });
                return
            }

            empleadoExist.cargoId = parseInt(cargoId)
            await empleadoExist.save()
            res.json({
                message: 'Cargo agregado correctamente a empleado',
                cargo: cargoExist,
                employee: empleadoExist
            })
            return
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Hubo un error' })
            return
        }

    }

    static updateCargoInfo = async (req: Request, res: Response) => {
        console.log("actualiza la informacion del cargo  (solo el titulo y salario)")
        try {
            const cargoId = req.params.idCargo
            const cargoExist = await Cargo.findByPk(cargoId)
            if (!cargoExist) {
                res.status(404).json({ error: 'Cargo no encontrado' });
                return
            }
            cargoExist.cargo = req.body.cargo
            cargoExist.save()
            res.json({ message: 'Cargo Actualizado correctamente' })

        } catch (error) {
            // console.log(error);
            res.status(500).json({ error: 'Hubo un error' })
            return
        }
    }

    static deleteCargo = async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.idCargo);
            
            const cargo = await Cargo.findByPk(id);
            if (!cargo) {
                res.status(404).json({ error: 'Cargo no encontrado' });
                return 
            }

            const empleadosConCargo = await Employee.count({
                where: { cargoId: id }
            });

            if (empleadosConCargo > 0) {
                res.status(400).json({ error: 'No se puede eliminar el cargo, hay empleados vinculados' });
                return 
            }

            await cargo.destroy();
            res.json({ message: 'Cargo eliminado correctamente' });
            return 

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al eliminar el cargo' });
            return 
        }
    };


}