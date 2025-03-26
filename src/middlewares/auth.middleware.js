import jwt from "jsonwebtoken";
import jwtConfig from "../config/jwt.config.js";
import { User } from "../models/user.model.js";

export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Acceso denegado, token faltante" });
  }

  const token = authHeader.split(" ")[1]; // Extrae el token sin "Bearer "

  try {
    const decoded = jwt.verify(token, jwtConfig.secret);
    req.user = await User.findById(decoded.id).select("-password"); // Excluir la contraseña
    if (!req.user) {
      return res.status(401).json({ message: "Token inválido" });
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token no válido" });
  }
};
