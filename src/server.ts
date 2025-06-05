import express from 'express' 
import employeeRouter from './router/employeeRouter'
import cargoTitleRouter from './router/cargoRouter'
import poncheRouter from './router/ponchesRouter'
import accountRouter from './router/accountRouter'
import nominaRouter from './router/nominaRouter'
import connectToDatabase from './config/db'

const app = express()

app.use(express.json())
connectToDatabase()

app.use('/api/employee', employeeRouter)    
app.use('/api/cargo', cargoTitleRouter)   
app.use('/api/ponche', poncheRouter)
app.use('/api/account', accountRouter)
app.use('/api/nomina', nominaRouter)

export default app