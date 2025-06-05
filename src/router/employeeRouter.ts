import { Router } from "express"
import { EmployeeController } from "../controllers/EmployeeController"
import { body, param } from "express-validator"
import { handleInputsErrors } from "../middleware/validation"
import { validateEmployeeExist, validatefullName } from "../middleware/employee"
const router = Router()

router.param('idEmployee', validateEmployeeExist)

//obtiene todas las horas trabajadas por un empleado, enviando el id
router.get('/', EmployeeController.getAll)

//obtener un empleado enviando el id
router.get('/:idEmployee', EmployeeController.getById
)

//obtiene todas las horas trabajadas por un empleado, enviando el id
router.get('/:idEmployee/hours', EmployeeController.getHoursById)

//obtiene el salario a pagar basandose en el total de horas por el precio de hora del empleado
router.get('/:idEmployee/salary', EmployeeController.getSalary)

//agrega un empleado nuevo
router.post('/',
    validatefullName,
    EmployeeController.addEmployee
)

//agrega un registro nuevo de horas usando el id del empleado para asociar las horas
router.post('/:idEmployee/salary',
    body('hours')
        .notEmpty().withMessage('Las horas no pueden ir vacias')
        .isInt()
        .withMessage('Las horas deben ser un numero')
        .custom(value => value > 0).withMessage('Las horas deben ser mayor a 0'),
    handleInputsErrors,
    EmployeeController.addHours
)

//actualiza la informacion del empleado (solo el fullname y pricePerhours)
router.put('/:idEmployee',
    validatefullName,
    EmployeeController.updateEmployee)

//borra un empleado y todo el registro de las horas trabajadas
router.delete('/:idEmployee', EmployeeController.deleteEmployee)

export default router