import { Request, Response } from "express";
import Employee from "../models/employee";
import HoursEmployee from "../models/hoursEmployee";
import Cargo from "../models/cargo";
import Salario from "../models/salario";

export class EmployeeController {
    static getAll = async (req: Request, res: Response) => {
        console.log("obtener todos los empleados registrados");
        try {
            const employees = await Employee.findAll({
                include: [
                    {
                        model: Cargo,
                        include: [Salario]
                    }
                ]
            })
            res.json(employees)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Hubo un error' })
        }
    }

    static getById = async (req: Request, res: Response) => {
        console.log("obtener un empleado enviando el id");
        try {
            const id = req.params.idEmployee
            const employeeExists = await Employee.findByPk(id)
            if (!employeeExists) {
                res.status(404).json({ error: 'Empleado no encontrado' });
                return
            }
            const employee = await Employee.findByPk(id)
            res.json(employee)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Hubo un error' })
        }
    }

    static getHoursById = async (req: Request, res: Response) => {
        console.log("obtiene todas las horas trabajadas por un empleado, enviando el id");
        try {
            const id = req.params.idEmployee

            const employeeExist = await Employee.findByPk(id)
            if (!employeeExist) {
                res.status(404).json({ error: 'Empleado no encontrado' });
                return
            }

            const totalHoursJson = await HoursEmployee.findAll({
                where: {
                    employeeId: id
                }
            })

            const totalHoursCalculates = totalHoursJson.reduce((accum, current) => { return accum += current.hours }, 0)

            res.json({
                employee: employeeExist.fullName,
                totalDeHorasTrabajadas: totalHoursCalculates
            })
            return
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Hubo un error' })
        }
    }

    //Pendiente
    static getSalary = async (req: Request, res: Response) => {
        console.log("obtiene el salario a pagar basandose en el total de horas por el precio de hora del empleado");
        res.json("obtiene el salario a pagar basandose en el total de horas por el precio de hora del empleado");
    }

    static addEmployee = async (req: Request, res: Response) => {
        console.log("agrega un empleado nuevo");
        try {
            const fullName = req.body.fullName
            const employee = await Employee.create({ fullName: fullName })
            res.json({
                message: "Empleado Agregado Correctamente",
                employee: employee


            })
        } catch (error) {
            // console.log(error);
            res.status(500).json({ error: 'Hubo un error' })
        }
    }

    static addHours = async (req: Request, res: Response) => {
        console.log("agrega un registro nuevo de horas usando el id del empleado para asociar las horas")
        try {
            const id = req.params.idEmployee

            const employeeExists = await Employee.findByPk(id)
            if (!employeeExists) {
                res.status(404).json({ error: 'Empleado no encontrado' });
                return
            }

            const hours = req.body.hours
            const hoursAdded = await HoursEmployee.create({
                hours: hours,
                employeeId: id
            });

            res.json({
                message: 'Horas agregadas correctamente',
                data: hoursAdded
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Hubo un error' })
        }
    }

    static updateEmployee = async (req: Request, res: Response) => {
        console.log("actualiza la informacion del empleado (solo el fullname y pricePerhours)")
        try {
            const id = req.params.idEmployee
            const employeeExist = await Employee.findByPk(id)
            if (!employeeExist) {
                res.status(404).json({ error: 'Empleado no encontrado' });
                return
            }
            const newFullName = req.body.fullName
            employeeExist.fullName = newFullName
            await employeeExist.save()
            res.json({ message: "Nombre actualizado correctamente" })


        } catch (error) {
            // console.log(error);
            res.status(500).json({ error: 'Hubo un error' })
        }
    }

    static deleteEmployee = async (req: Request, res: Response) => {
        console.log("borra un empleado y todo el registro de las horas trabajadas")
        try {
            const id = req.params.idEmployee
            const employeeExist = await Employee.findByPk(id)
            if (!employeeExist) {
                res.status(404).json({ error: 'Empleado no encontrado' });
                return
            }
            await employeeExist.destroy()
            res.json({ message: "Empleado eliminado correctamente" })


        } catch (error) {
            // console.log(error);
            res.status(500).json({ error: 'Hubo un error' })
        }
    }
}