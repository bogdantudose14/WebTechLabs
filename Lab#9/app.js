import express from 'express'
import cors from 'cors'
import { sequelize } from './sequelize.js'
import { moviesRouter } from './Routers/moviesRouter.js'

const app = express()
app.use(express.json()) // The express.json() function is a built-in middleware function in Express.
// It parses incoming requests with JSON payloads

app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use('/api', moviesRouter)

app.listen(5001, async () => {
  console.log('Express web server running on port 5001')
  try {
    await sequelize.authenticate()
    console.log('Connection has been established!')
  } catch (err) {
    console.err('Unable to connect to the database!', err)
  }
})
