import { Router } from "express"
import { EmployeeController } from "../controllers/EmployeeController"

const router = Router()

//obtiene todas las horas trabajadas por un empleado, enviando el id
router.get('/', EmployeeController.getAll)

//obtener un empleado enviando el id
router.get('/:id', EmployeeController.getById)

//obtiene todas las horas trabajadas por un empleado, enviando el id
router.get('/:id/hours', EmployeeController.getHoursById)

//obtiene el salario a pagar basandose en el total de horas por el precio de hora del empleado
router.get('/:id/salary', EmployeeController.getSalary)

//agrega un empleado nuevo
router.post('/', EmployeeController.add)

//agrega un registro nuevo de horas usando el id del empleado para asociar las horas
router.post('/:id/salary', EmployeeController.addHours)

//actualiza la informacion del empleado (solo el fullname y pricePerhours)
router.put('/:id', EmployeeController.update)

//borra un empleado y todo el registro de las horas trabajadas
router.delete('/:id', EmployeeController.delete)

export default router