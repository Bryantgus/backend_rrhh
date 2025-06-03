import express from 'express' 
import employeeRouter from './router/employeeRouter'
import cargoTitleRouter from './router/cargoRouter'
import salarioRouter from './router/salariosRouter'
const app = express()

app.use(express.json())

app.use('/api/employee', employeeRouter)    
app.use('/api/cargo', cargoTitleRouter)   
app.use('/api/salarios', salarioRouter) 

export default app