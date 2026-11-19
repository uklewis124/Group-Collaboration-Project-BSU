import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import ViteExpress from 'vite-express'
import {initializeDatabase} from "./database.js";
import {User, createUser, deleteUser, modifyUser, getUserById, getAllUsers} from "./database-models/user.js";
import morgan from 'morgan';

// I added "morgan" from an external npm repo. it will basically just say when people send requests to the server.
// sole use is debugging. zero functionality on the actual site.

const app = express()
const PORT = process.env.PORT || 3000

// convert any arriving JSON text into a usable JavaScript object
app.use(express.json())
app.use(morgan("dev"))

//connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err))

initializeDatabase();  // Connect to database

// User to Database Endpoints
createUser(app);  // Initialize createUser endpoint
getUserById(app);  // Initialize getUserById endpoint
getAllUsers(app);  // Initialize getAllUsers endpoint
deleteUser(app);  // Initialize deleteUser endpoint
modifyUser(app);  // Initialize modifyUser endpoint

// test the route — visit /api/health to confirm
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

// test the database is working /api/health/database
app.get('/api/health/database', async (req, res) => {
  const result = await User.find()
  if (result) {return res.json({ status: 'ok', result: result })}
  else {return res.json({ status: 'error', result: null });}
})

// serve the app with hot reload in dev, or built files in production
ViteExpress.listen(app, PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})