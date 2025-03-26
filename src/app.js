import { config } from "./config/index.js";
import express from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import memberRoutes from "./routes/member.routes.js";
import allyRoutes from "./routes/ally.routes.js";
import courseRoutes from "./routes/course.routes.js";
import authRoutes from "./routes/auth.routes.js";
import swaggerUi from "swagger-ui-express";
import specs from "./swagger/swagger.js";

config.connectDB();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(authRoutes);

app.use(userRoutes);
app.use(memberRoutes);
app.use(allyRoutes);
app.use(courseRoutes);

app.get("/", (req, res) => {
  res.send("FARA - Backend API v0.0.1");
});

app.listen(config.port, () => {
  console.log(`🚀 Server running on port ${config.port}`);
});
