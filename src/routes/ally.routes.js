import express from "express";
import { 
  createAlly, 
  getAllies, 
  getAllyById, 
  updateAlly, 
  deleteAlly 
} from "../controllers/ally.controller.js";

const router = express.Router();

// Crear un aliado
router.post("/api/ally", createAlly);

// Obtener todos los aliados
router.get("/api/ally", getAllies);

// Obtener un aliado por ID
router.get("/api/ally/:id", getAllyById);

// Actualizar un aliado por ID
router.put("/api/ally/:id", updateAlly);

// Eliminar un aliado por ID
router.delete("/api/ally/:id", deleteAlly);

export default router;