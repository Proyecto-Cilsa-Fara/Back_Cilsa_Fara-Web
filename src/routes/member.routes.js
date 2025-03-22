import express from "express"
import Member from "../models/member.model.js"

const router = express.Router()

router.post("/add-member", async (req, res) => {
    const { name, lastName, position, photo } = req.body;
    try {
      const newMember = new Member({
        name,
        lastName,
        position,
        photo
      });
  
      await newMember.save();
      res.status(201).json({ message: "Miembro añadido correctamente" });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "Error al añadir el miembro", error });
    }
  });
  
  export default router