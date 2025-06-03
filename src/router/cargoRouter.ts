import { Router } from "express"
import { CargoController } from "../controllers/CargoController"
import { body, param } from "express-validator"
import { handleInputsErrors } from "../middleware/validation"

const router = Router()

//obtener todos los cargos registrados
router.get('/', CargoController.getAll)

//obtener un cargo por el id
router.get('/:idCargo',
    param('idCargo').isInt().withMessage('Id debe ser un numero')
        .custom(value => value > 0).withMessage('Id debe ser mayor a 0'),
    handleInputsErrors,
    CargoController.getCargoById)

//obtiene todas los empleado por el id del cargo
router.get('/:idCargo/empleado', CargoController.getAllEmployeesByIdCargo)

//agrega un cargo nuevo
router.post('/',
    body('cargo')
        .notEmpty().withMessage("El cargo no puede ir vacio"),
    handleInputsErrors,
    CargoController.addNewCargo)

//agrega un registro nuevo de cargo usando el id del empleado para asociarlo
//Agregar cargo a un empleado
router.post('/:idCargo/empleado/:idEmpleado',
    param('idCargo').isInt().withMessage('Id debe ser un numero')
        .custom(value => value > 0).withMessage('Id debe ser mayor a 0'),
    param('idEmpleado').isInt().withMessage('Id debe ser un numero')
        .custom(value => value > 0).withMessage('Id debe ser mayor a 0'),
    handleInputsErrors,
    CargoController.addCargoToEmployee)

//actualiza la informacion del cargo  (solo el titulo y salario)
router.put('/:idCargo',
    body('cargo')
        .notEmpty().withMessage("El cargo no puede ir vacio"),
    param('idCargo').isInt().withMessage('Id debe ser un numero')
        .custom(value => value > 0).withMessage('Id debe ser mayor a 0'),
    handleInputsErrors,
    CargoController.updateCargoInfo)

//borra un cargo siempre y cuando no tenga empleado vinculados
router.delete('/:idCargo',
    param('idCargo').isInt().withMessage('Id debe ser un numero')
        .custom(value => value > 0).withMessage('Id debe ser mayor a 0'),
    CargoController.deleteCargo)

export default router