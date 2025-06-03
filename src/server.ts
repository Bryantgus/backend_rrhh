import express from 'express' 
import employeeRouter from './router/employeeRouter'

const app = express()

app.use(express.json())
app.use('/api/employee', employeeRouter)    

export default app