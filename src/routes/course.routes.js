import express from "express";
import CourseController from "../controllers/course.controller.js";

const router = express.Router();

router.post("/api/courses", CourseController.create);

router.get("/api/courses", CourseController.getAll);

router.get("/api/courses/:id", CourseController.getCourse);

router.put("/api/courses/:id", CourseController.update);

router.delete("/api/courses/:id", CourseController.delete);

export default router;
