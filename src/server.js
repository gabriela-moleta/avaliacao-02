import express from "express";
import startupRoutes from "./routes/startupRoutes.js";
const app = express();
const port = 4000;
app.use(express.json());
app.use("/startup", startupRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
