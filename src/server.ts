import express from 'express' 
import employeeRouter from './router/employeeRouter'
import jobTitleRouter from './router/cargoRouter'

const app = express()

app.use(express.json())
app.use('/api/employee', employeeRouter)    
app.use('/api/cargo', jobTitleRouter)   

export default app