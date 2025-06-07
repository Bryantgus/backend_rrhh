import express from 'express' 
import employeeRouter from './router/employeeRouter'
import cargoTitleRouter from './router/cargoRouter'
import poncheRouter from './router/ponchesRouter'
import accountRouter from './router/accountRouter'
import nominaRouter from './router/nominaRouter'
import connectToDatabase from './config/db'
import { corsConfig } from './config/cors'
import cors from 'cors'
import { authenticate } from './middleware/auth'
const app = express()

app.use(express.json())

app.use(cors(corsConfig))
connectToDatabase()

app.use('/api/account', accountRouter)

app.use(authenticate)
app.use('/api/employee', employeeRouter)    
app.use('/api/cargo', cargoTitleRouter)   
app.use('/api/ponche', poncheRouter)
app.use('/api/nomina', nominaRouter)

export default app

