import { Router } from "express"
import { EmployeeController } from "../controllers/EmployeeController"
import { body, param } from "express-validator"
import { handleInputsErrors } from "../middleware/validation"
const router = Router()

//obtiene todas las horas trabajadas por un empleado, enviando el id
router.get('/', EmployeeController.getAll)

//obtener un empleado enviando el id
router.get('/:idEmployee',

    param('idEmployee').isInt().withMessage('Id debe ser un numero')
        .custom(value => value > 0).withMessage('Id debe ser mayor a 0'),

    EmployeeController.getById
)

//obtiene todas las horas trabajadas por un empleado, enviando el id
router.get('/:idEmployee/hours',
    param('idEmployee').isInt().withMessage('Id debe ser un numero')
        .custom(value => value > 0).withMessage('Id debe ser mayor a 0'),
    handleInputsErrors,
    EmployeeController.getHoursById
)

//obtiene el salario a pagar basandose en el total de horas por el precio de hora del empleado
router.get('/:idEmployee/salary', EmployeeController.getSalary)

//agrega un empleado nuevo
router.post('/',
    body('fullName')
        .notEmpty()
        .withMessage("El nombre del empleado no puede ir vacio"),
    handleInputsErrors, 
    EmployeeController.addEmployee
)

//agrega un registro nuevo de horas usando el id del empleado para asociar las horas
router.post('/:idEmployee/salary', 
    body('hours')
        .notEmpty().withMessage('Las horas no pueden ir vacias')
        .isInt()
        .withMessage('Las horas deben ser un numero')
        .custom(value => value > 0).withMessage('Las horas deben ser mayor a 0'),
    param('idEmployee').isInt().withMessage('Id debe ser un numero')
        .custom(value => value > 0).withMessage('Id debe ser mayor a 0'),
    handleInputsErrors,
    EmployeeController.addHours
)

//actualiza la informacion del empleado (solo el fullname y pricePerhours)
router.put('/:idEmployee', 
    body('fullName')
        .notEmpty().withMessage('El nombre del empleado no puede ir vacio'),
    param('idEmployee').isInt().withMessage('Id debe ser un numero')
        .custom(value => value > 0).withMessage('Id debe ser mayor a 0'),
    handleInputsErrors,
    EmployeeController.updateEmployee)

//borra un empleado y todo el registro de las horas trabajadas
router.delete('/:idEmployee', 
    param('idEmployee').isInt().withMessage('Id debe ser un numero')
        .custom(value => value > 0).withMessage('Id debe ser mayor a 0'),
    handleInputsErrors,
    EmployeeController.deleteEmployee)

export default router