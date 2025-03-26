import Member from "../models/member.model.js";

const MemberController = {
  create: async (req, res) => {
    try {
      let member = await Member.findOne({
        name: req.body.name,
        lastName: req.body.lastName,
      });
      if (member) {
        return res.status(400).json({
          error: true,
          message: "Miembro ya existe",
        });
      }
      const newMember = new Member({
        photo: req.body.photo || undefined,
        name: req.body.name,
        lastName: req.body.lastName,
        position: req.body.position,
      });
      const data = await newMember.save();
      res.status(201).json({
        member: data,
        error: false,
        message: "Miembro agregado",
      });
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: true, message: "Error al añadir el miembro", error });
    }
  },

  getAll: async (req, res) => {
    try {
      const data = await Member.find();
      res.status(200).json({
        members: data,
        error: false,
        message: "Lista de miembros",
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        error: true,
        message: "Error al obtener la lista de miembros",
        error,
      });
    }
  },

  getMember: async (req, res) => {
    try {
      const data = await Member.findById(req.params.id);
      if (!data) {
        return res.status(404).json({
          error: true,
          message: "Miembro no encontrado",
        });
      }
      res.status(200).json({
        member: data,
        error: false,
        message: "Miembro encontrado",
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        error: true,
        message: "Error al obtener el miembro",
        error,
      });
    }
  },

  update: async (req, res) => {
    try {
      const data = await Member.findByIdAndUpdate(
        req.params.id,
        {
          photo: req.body.photo || undefined,
          name: req.body.name,
          lastName: req.body.lastName,
          position: req.body.position,
        },
        { new: true }
      );
      if (!data) {
        return res.status(404).json({
          error: true,
          message: "Miembro no encontrado",
        });
      }
      res.status(200).json({
        member: data,
        error: false,
        message: "Miembro actualizado",
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        error: true,
        message: "Error al actualizar el miembro",
        error,
      });
    }
  },

  delete: async (req, res) => {
    try {
      const data = await Member.findByIdAndDelete(req.params.id);
      if (!data) {
        return res.status(404).json({
          error: true,
          message: "Miembro no encontrado",
        });
      }
      res.status(200).json({
        member: data,
        error: false,
        message: "Miembro eliminado",
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        error: true,
        message: "Error al eliminar el miembro",
        error,
      });
    }
  },
};

export default MemberController;
