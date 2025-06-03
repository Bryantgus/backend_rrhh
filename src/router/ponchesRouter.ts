import { Router } from "express"
import { PonchesController } from "../controllers/PonchesController"

const router = Router()

//obtener todos los  ponche
router.get('/', PonchesController.getAll)

//obtener el ponche enviando el id del empleado
router.get('/employee/:idEmployee', PonchesController.getPoncheEmployee)

// //obtiene las horas x ponche 
router.get('/ponche/:idPonche/empleado/:idEmployee', PonchesController.getHoursxPonche)

router.post('/idEmployee', PonchesController.ponchar)

export default router