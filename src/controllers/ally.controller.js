import Ally from "../models/ally.model.js";

// Crear un aliado
export const createAlly = async (req, res) => {
    const { order, name, logo } = req.body;
    try {
        const newAlly = new Ally({ order, name, logo });
        await newAlly.save();
        res.status(201).json({ message: "Aliado añadido correctamente", newAlly });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al añadir el aliado", error });
    }
};

// Obtener todos los aliados
export const getAllies = async (req, res) => {
    try {
        const allies = await Ally.find();
        res.status(200).json(allies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener aliados", error });
    }
};

// Obtener un aliado por ID
export const getAllyById = async (req, res) => {
    try {
        const ally = await Ally.findById(req.params.id);
        if (!ally) return res.status(404).json({ message: "Aliado no encontrado" });
        res.status(200).json(ally);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener el aliado", error });
    }
};

// Actualizar un aliado
export const updateAlly = async (req, res) => {
    try {
        const updatedAlly = await Ally.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAlly) return res.status(404).json({ message: "Aliado no encontrado" });
        res.status(200).json({ message: "Aliado actualizado correctamente", updatedAlly });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar el aliado", error });
    }
};

// Eliminar un aliado
export const deleteAlly = async (req, res) => {
    try {
        const deletedAlly = await Ally.findByIdAndDelete(req.params.id);
        if (!deletedAlly) return res.status(404).json({ message: "Aliado no encontrado" });
        res.status(200).json({ message: "Aliado eliminado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar el aliado", error });
    }
};