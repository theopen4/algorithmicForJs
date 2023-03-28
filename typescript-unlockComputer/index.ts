import dotenv from 'dotenv'
dotenv.config()
import thingRouter from './src/routes/thingRouter'
import express from 'express'
const app = express()
app.use(express.json())
app.use('/things',thingRouter)
app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
} )