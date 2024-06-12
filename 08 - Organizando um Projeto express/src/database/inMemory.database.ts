import { Product } from "../interfaces/product.interfaces";

export const productList: Product[] = [];

let generatedId = 0;

export function generateNextId() {
  // 1. Retorna o id ANTES de incrementar (sendo 0 o primeiro retorno)
  // return generatedId++;

  // 2. Equivalente ao trecho 3.
  // generatedId++;
  // return generatedId;

  // 3. O incremento é feito ANTES de retornar o id.
  return ++generatedId;
}
