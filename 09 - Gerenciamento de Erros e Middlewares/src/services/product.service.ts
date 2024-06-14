import { generateNextId, productList } from "../database/inMemory.database";
import { ApiError } from "../errors/api.error";
import {
  Product,
  ProductCreate,
  ProductUpdate,
} from "../interfaces/product.interfaces";

/*
  SERVICES
  - Implementa lógica de negócio (regra de negócio), se comunicando com a base de dados
*/
export class ProductService {
  public create = (payload: ProductCreate): Product => {
    const newProduct = {
      id: generateNextId(),
      ...payload,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    productList.push(newProduct);

    return newProduct;
  };

  public findAll = () => {
    return productList;
  };

  public findById = (productId: number) => {
    // v1
    const foundIndex = productList.findIndex(
      (product) => product.id === productId
    );

    if (foundIndex === -1) {
      throw new ApiError("Product not found", 404);
    }

    return productList[foundIndex];

    // v2
    // const foundProduct = productList.find((product) => product.id === productId);

    // if(!foundProduct){
    //   throw new ApiError("Product not found", 404)
    // }

    // return foundProduct;
  };

  public partialUpdate = (productId: number, payload: ProductUpdate) => {
    // v1.
    // 1. O produto existe?
    const foundIndex = productList.findIndex(
      (product) => product.id === productId
    );

    if (foundIndex === -1) {
      throw new ApiError("Product not found", 404);
    }

    // 2. Se existir, atualizar os campos
    const updatedProduct = {
      ...productList[foundIndex],
      ...payload,
      updatedAt: new Date(),
    };

    productList.splice(foundIndex, 1, updatedProduct);

    return updatedProduct;
  };

  public delete = (productId: number) => {
    const foundIndex = productList.findIndex(
      (product) => product.id === productId
    );

    if (foundIndex === -1) {
      // Levantar erros INTERROMPE o fluxo do código (assim como um return)
      // 404 - NOT FOUND
      throw new ApiError("Product not found", 404);
    }

    productList.splice(foundIndex, 1);
  };
}
