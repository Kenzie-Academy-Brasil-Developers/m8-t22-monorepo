import { generateNextId, productList } from "../database/inMemory.database";
import { ProductCreate } from "../interfaces/product.interfaces";

/*
  SERVICES
  - Implementa lógica de negócio (regra de negócio), se comunicando com a base de dados
*/
export class ProductService {
  public create = (payload: ProductCreate) => {
    const newProduct = {
      id: generateNextId(),
      ...payload,
    };

    productList.push(newProduct);

    return newProduct;
  };

  public findAll = () => {
    return productList;
  };

  public delete = (productId: number) => {
    const foundIndex = productList.findIndex(
      (product) => product.id === productId
    );

    if (foundIndex === -1) {
      // Levantar erros INTERREMPE o fluxo do código (assim como um return)
      throw new Error("Product not found");
    }

    productList.splice(foundIndex, 1);
  };
}
