import express from "express";
import { productRouter } from "./routers/product.router";
import { handleGlobalErrors } from "./errors/handle.error";

// Nucleo da aplicação
const app = express();
app.use(express.json());

// Registrar os roteadores
app.use("/products", productRouter);

// PRECISA SER DEPOIS DA INICIALIZAÇÃO DAS ROTAS
app.use(handleGlobalErrors);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
