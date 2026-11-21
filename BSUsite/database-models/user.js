import mongoose from "mongoose";
import { CastError } from "mongoose";
import {sendServerError} from "../database.js";
import e from "express";

export const User = mongoose.model(
  'User',
  new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    admin: {
      type: Boolean, default: false
    },
  }), "users",)

const schemaOptions = ["name", "bar"]

export function createUser(app) {
  app.post('/api/user', async (req, res) => {
    try {
      const { username, passwordHash } = req.body;

      const person = await User.create({
        username: username,
        passwordHash: passwordHash,
        admin: false,
      })

      return res.status(201).json({
        _id: person._id,
        username: person.username,
      })
    } catch (e) {
      if (e instanceof mongoose.Error.ValidationError) {
        return res.status(400).json({
          error: "Invalid form entry",
          details: e.stack,
        })
      }
      sendServerError(res, "An unknown error occured while creating user", e);
    }
  })
}

export function modifyUser(app) {
  app.patch('/api/user/:id', async (req, res) => {


    try {
      let user = await User.findById(req.params.id);

      if (!user) {
        return res.status(404).json({
          error: "User not found",
          details: "Check the user ID and try again",
        })
      }

      const { username, passwordHash } = req.body;
      if (!username && !passwordHash) {
        return res.status(400).json({
          error: "No data to change"
        })
      }

      user.username = username ? username : user.username
      user.passwordHash = passwordHash ? passwordHash : user.passwordHash

      await user.save()  // Commit changes to database & wait for database to confirm changes

      return res.status(201).json({
        _id: user._id,
        username: user.username,
        password: passwordHash ? "Password Changed" : "Password not modified"
      })
    } catch (e) {
      return res.status(500).json({
        error: "An unknown error occured while updating user",
        details: e.stack,
      })
    }
  })
}

export function deleteUser(app) {
  app.delete('/api/user/:id', async (req, res) => {
    try {
      let user = await User.findByIdAndDelete(req.params.id)

      if (!user) {
        return res.status(404).json({"error": "User not found"})
      }

      return res.status(204).json({});  // .json() only to end request. i could do .end() but thats confusing to me.
    } catch (e) {
      if (e instanceof CastError) {return res.status(404).json({"error": "User not found"}) }
      return res.status(500).json({"error": "Unknown error occured while trying to delete user"})
    }
  })
}

export function getUserById(app) {
  app.get('/api/user/:id', async (req, res) => {
    try {
      return res.status(200).json(await User.findById(req.params.id))
    } catch (e) {
      if (e instanceof CastError) {
        return res.status(404).json({"error": "User not found"})
      }
      return res.status(500).json({
        "error": "Unknown error occured while trying to get user",
        "details": e.stack,
      })
    }
  })
}

// DEVELOPMENT USE ONLY, MUST BE DELETED BEFORE PRODUCTION
export function getAllUsers(app) {
  app.get('/api/users', async (req, res) => {
    try {
      return res.status(200).json(await User.find())
    } catch (e) {
      return res.status(500).json({
        "error": "Unknown error occured while trying to get users",
        "details": e.stack,
      })
    }
  })
}