import express from "express"
import Curse from "../models/curse.model.js"

const router = express.Router();

router.post("/add-curse", async (req, res) => {
    const { title, description, link } = req.body;
    
    try {
        const newCurse = new Curse({
            title,
            description,
            link
        });

        await newCurse.save();
        
        res.status(201).json({ message: "Curso añadido correctamente" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Error al añadir el curso", error });
    }
});

export default router;