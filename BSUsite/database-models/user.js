import mongoose from "mongoose";
import { CastError } from "mongoose";

export const User = mongoose.model(
  'User',
  new mongoose.Schema({
    name: String,
    bar: String,
  }), "users",)

export function createUser(app) {
  app.post('/api/user', async (req, res) => {
    res.status(201).json(await User.create(req.body))
  })
}

export function modifyUser(app) {}

export function deleteUser(app) {
  app.delete('/api/user/:id', async (req, res) => {
    try {
      let user = await User.findByIdAndDelete(req.params.id)

      if (!user) {
        return res.status(404).json({"error": "User not found"})
      }

      return res.status(204).json(user)
    } catch (e) {
      if (e instanceof CastError) {return res.status(404).json({"error": "User not found"}) }
      return res.status(500).json({"error": "Unknown error occured while trying to delete user"})
    }
  })
}

export function getUserById(app) {
  app.get('/api/user/:id', async (req, res) => {
    try {
      res.status(200).json(await User.findById(req.params.id))
    } catch (e) {
      if (e instanceof CastError) {
        return res.status(404).json({"error": "User not found"})
      }
      return res.status(500).json({"error": "Unknown error occured while trying to get user"})
    }
  })
}

// DEVELOPMENT USE ONLY, MUST BE DELETED BEFORE PRODUCTION
export function getAllUsers(app) {
  app.get('/api/users', async (req, res) => {
    res.status(200).json(await User.find())
  })
}