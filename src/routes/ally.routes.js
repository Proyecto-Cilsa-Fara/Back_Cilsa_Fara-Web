import express from "express"
import Ally from "../models/ally.model.js"

const router = express.Router()

router.post("/add-ally", async (req, res) => {
  const { order, name, logo } = req.body;
  
  try {
    const newAlly = new Ally({
      order,
      name,
      logo
    });

    await newAlly.save();
    
    res.status(201).json({ message: "Aliado añadido correctamente" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error al añadir el aliado", error });
  }
});

export default router