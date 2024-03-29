import express from 'express'
import cors from 'cors'
import { MainRouter } from './Routes/index.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

// mount the router to start from http://localhost:5001/api
app.use('/api', MainRouter)

let serverPort = 5001
app.listen(serverPort, () => {
  console.log(`Express web server running on port ${serverPort}`)
})
