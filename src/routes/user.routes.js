import express from "express"
// import authMiddleware from "../middlewares/auth.middleware.js"
// import { UserController } from "../controllers/user.controller.js"

const router = express.Router()

// router.put("/api/users", authMiddleware, UserController.update)
// router.delete("/api/users", authMiddleware, UserController.delete)

// Endpoint falso solamente para poder dejar comentado las otras rutas
// como ejemplos válidos.
router.delete("/api/users", () => console.log("delete some user"))

export default router
