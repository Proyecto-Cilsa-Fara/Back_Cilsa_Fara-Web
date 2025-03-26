import { mUser } from "../models/user.model.js";

const UserController = {
  create: async (req, res) => {
    const body = req.body;
    try {
      const userDb = await mUser.create(body);
      const user = {
        name: userDb.name,
        email: userDb.email,
        profilePicture: userDb.profilePicture,
        id: userDb._id,
      };
      res
        .status(201)
        .json({ error: false, message: "usuario agregado", user: user });
    } catch (err) {
      res.status(400).json({ error: true, message: err.message });
    }
  },

  getOne: async (req, res) => {
    const id = req.params.id;
    // console.log(id)
    // res.json({message: 'exito'})
    try {
      const userDb = await mUser.getUser(id);
      // console.log('user: ', userDb)

      if (userDb) {
        res.json({
          name: userDb.name,
          email: userDb.email,
          profilePicture: userDb.profilePicture,
          id: userDb._id,
        });
      } else {
        // usuario no encontrado
        res.status(404).json({ error: true, message: "Usuario no encontrado" });
      }
    } catch (err) {
      res.status(500).json({ error: true, message: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const users = await mUser.getAll();
      const data = users.map((user) => {
        return {
          name: user.name,
          email: user.email,
          profilePicture: user.profilePicture,
          id: user._id,
        };
      });
      res.json({ data });
    } catch (err) {
      res.status(500).json({ error: true, message: err.message });
    }
  },

  update: async (req, res) => {
    const id = req.params.id;

    try {
      const body = req.body;
      const userDb = await mUser.update(id, body);
      if (userDb) {
        const updatedUser = {
          name: userDb.name,
          email: userDb.email,
          profilePicture: userDb.profilePicture,
          id: userDb._id,
        };
        res.json({
          error: false,
          user: updatedUser,
          message: "Usuario actualizado con exito",
        });
      } else {
        // usuario no encontrado
        res.status(404).json({ error: true, message: "Usuario no encontrado" });
      }
    } catch (err) {
      res.status(500).json({ error: true, message: err.message });
    }
  },

  delete: async (req, res) => {
    const id = req.params.id;
    try {
      await mUser.delete(id);
      res.json({
        error: false,
        message: "Usuario eliminado",
      });
    } catch (err) {
      //recurso no encontrado con id
      res.status(404).json({
        error: true,
        message: err.message,
      });
    }
  },
};

export default UserController;
