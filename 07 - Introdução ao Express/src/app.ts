import express, { request, response } from "express";
import { Product } from "./interfaces/product.interfaces";

// Nucleo da aplicação
const app = express();
app.use(express.json());

/*
  Rotas -> Caminhos na url para executar determinada interação
(através de metodos HTTP) com um recurso.
CRUD (Create, Read, Update, Delete)
  GET -> Obtenção de um (ou mais) recurso(s)
  POST -> Criação de um recurso
  PATCH/PUT -> Atualização de um recurso
  DELETE -> Deleção de um recurso
*/

/*
  API Rest -> Retornos e entradas em formato JSON
  REQUEST -> Dados que entram na API
  RESPONSE -> Dados que saem
*/

const productList: Product[] = [];
let generatedId = 1;
/*
  Semantica de ENDPOINT:
  product

  /products
*/
app.get("/products", (request, response) => {
  return response.json(productList);
});

// 201 -> CREATED
app.post("/products", (request, response) => {
  // console.log(request.body);
  // console.log(typeof request.body);
  // console.log(request.body.name);
  const newProduct = {
    id: generatedId,
    ...request.body,
  };
  generatedId++;

  productList.push(newProduct);

  return response.status(201).json(newProduct);
});

// URL PARAMS (Parametros de URL)
app.delete("/products/:productId", (req, res) => {
  console.log(req.params.productId);

  const foundIndex = productList.findIndex(
    (product) => product.id === Number(req.params.productId)
  );

  if (foundIndex === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  productList.splice(foundIndex, 1);

  /*
  - 204 (NO CONTENT) -> Sem body
  - 200 (OK) -> Com o dado deletado
  */
  return res.status(204).json();
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
