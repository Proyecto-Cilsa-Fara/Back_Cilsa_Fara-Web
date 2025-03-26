const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // Habilita CORS
app.use(morgan("dev")); // Registra las solicitudes HTTP en consola
app.use(express.json()); // Permite recibir datos en formato JSON
app.use(express.urlencoded({ extended: true })); // Permite recibir datos de formularios

// Rutas
app.get("/", (req, res) => {
  res.send("¡Servidor funcionando!");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
