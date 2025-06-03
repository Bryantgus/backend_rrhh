import { Router } from "express"
import { CargoController } from "../controllers/CargoController"

const router = Router()

//obtener todos los cargos registrados
router.get('/', CargoController.getAll)

//obtener un cargo por el id
router.get('/:id', CargoController.getCargoById)

//obtiene todas los empleado por el id del cargo
router.get('/:id/empleado', CargoController.getAllEmployeesByIdCargo)

//agrega un cargo nuevo
router.post('/', CargoController.addNewCargo)

//agrega un registro nuevo de cargo usando el id del empleado para asociarlo
//Agregar cargo a un empleado
router.post('/:id/empleado', CargoController.addCargoToEmployee)

//actualiza la informacion del cargo  (solo el titulo y salario)
router.put('/:id', CargoController.updateCargoInfo)

//borra un cargo siempre y cuando no tenga empleado vinculados
router.delete('/:id', CargoController.deleteCargo)

export default router