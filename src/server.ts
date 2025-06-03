import express from 'express' 
import employeeRouter from './router/employeeRouter'
import cargoTitleRouter from './router/cargoRouter'
import salarioRouter from './router/salariosRouter'
import poncheRouter from './router/ponchesRouter'

const app = express()

app.use(express.json())

app.use('/api/employee', employeeRouter)    
app.use('/api/cargo', cargoTitleRouter)   
app.use('/api/salarios', salarioRouter) 
app.use('/api/ponche', poncheRouter)

export default app