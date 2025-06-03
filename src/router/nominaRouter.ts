import { Router } from "express"
import { NominaController } from "../controllers/NominaController"

const router = Router()

//obtener todas las nominas
router.get('/', NominaController.getAll)

//obtener las nominas del empleado enviando el id del empleado
router.get('/employee/:idEmployee', NominaController.getAllByIdEmployee)

//obtiene una nomina en particular por empleado 
router.get('/:idNomina/employee/:idEmployee', NominaController.getOneByIdEmployee)

//crear nomina
router.post('/', NominaController.create)

export default router