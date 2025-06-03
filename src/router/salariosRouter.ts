import { Router } from "express"
import { SalariosRouter } from "../controllers/SalariosController"

const router = Router()

//obtener todos los salarios  por cargo
router.get('/cargo', SalariosRouter.getAll)

//agrega un salario a un cargo 
router.post('/:idCargo', SalariosRouter.addSalaryToCargo)

//agrega un registro nuevo de salario
router.post('/', SalariosRouter.addNewSalary)

//borra un salarios siempre y cuando no tenga cargo vinculados
router.delete('/:idSalario', SalariosRouter.deleteSalary)

export default router
