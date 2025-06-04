import { Router } from "express"
import { SalariosRouter } from "../controllers/SalariosController"
import { body, param } from "express-validator"
import { handleInputsErrors } from "../middleware/validation"

const router = Router()

//obtener todos los salarios por cargo
router.get('/cargo', SalariosRouter.getAll)

//agrega un salario a un cargo 
router.post('/:idSalario/cargo/:idCargo',
    param('idSalario').isInt().withMessage('Id debe ser un numero')
        .custom(value => value > 0).withMessage('Id debe ser mayor a 0'),
    param('idCargo').isInt().withMessage('Id debe ser un numero')
        .custom(value => value > 0).withMessage('Id debe ser mayor a 0'),
    handleInputsErrors,
    SalariosRouter.addSalaryToCargo)

//agrega un registro nuevo de salario
router.post('/',
    body('salario')
        .notEmpty().withMessage('El salario no puede ir vacio')
        .isInt().withMessage('El salario debe ser un numero')
        .custom(value => value > 0).withMessage('El salario debe ser mayor a 0'),
        handleInputsErrors,
    SalariosRouter.addNewSalary)

//borra un salarios siempre y cuando no tenga cargo vinculados
router.delete('/:idSalario', 
    param('idSalario').isInt().withMessage('Id debe ser un numero')
        .custom(value => value > 0).withMessage('Id debe ser mayor a 0'),
    handleInputsErrors,
    SalariosRouter.deleteSalary)

export default router
