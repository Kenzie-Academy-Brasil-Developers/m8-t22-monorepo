import express from "express";
import { productRouter } from "./routers/product.router";

// Nucleo da aplicação
const app = express();
app.use(express.json());

// Registrar os roteadores
app.use("/products", productRouter);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
