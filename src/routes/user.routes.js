import express from "express";
// import authMiddleware from "../middlewares/auth.middleware.js"
import UserController  from "../controllers/user.controller.js"

const router = express.Router();


router.post("/api/users/register", UserController.create)

router.get("/api/users",  UserController.getAll)

router.get("/api/users/:id",  UserController.getOne)

router.put("/api/users/:id",  UserController.update)

router.delete("/api/users/:id", UserController.delete)

export default router;
