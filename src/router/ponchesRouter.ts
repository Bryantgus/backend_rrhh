import { Router } from "express"
import { PonchesController } from "../controllers/PonchesController"

const router = Router()

//obtener todos los  ponche
router.get('/', PonchesController.getAll)

//obtener el ponche enviando el id del empleado
router.get('/:idEmployee', PonchesController.getPoncheEmployee)

// //obtiene las horas x ponche 
router.get('/hours/:idEmployee/', PonchesController.getHoursxPonche)

router.post('/', PonchesController.ponchar)

export default router