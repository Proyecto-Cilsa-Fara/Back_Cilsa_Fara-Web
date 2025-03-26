import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import jwtConfig from "../config/jwt.config.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Validaciones
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      return res.status(400).json({ message: "Correo electrónico inválido" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "La contraseña debe tener al menos 6 caracteres" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "El correo ya está registrado" });
    }

    // Crear usuario (el middleware de Mongoose hashea la contraseña automáticamente)
    const user = new User({ name, email, password, role });

    await user.save();

    res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error("Error en el registro:", error);
    res
      .status(500)
      .json({ message: "Error en el servidor", error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Credenciales inválidas" });
    }

    // Usar el método del modelo `comparePassword`
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      console.log("Contraseña incorrecta");
      return res.status(400).json({ message: "Credenciales inválidas" });
    }

    // Generar token JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      jwtConfig.secret,
      {
        expiresIn: jwtConfig.expiresIn,
      }
    );

    res.json({ token });
  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

export const getMe = async (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo usuario", error });
  }
};

export const logout = async (req, res) => {
  try {
    res.status(200).json({ message: "Logout exitoso" });
  } catch (error) {
    console.error("Error en logout:", error);
    res.status(500).json({ message: "Error en el servidor", error });
  }
};
