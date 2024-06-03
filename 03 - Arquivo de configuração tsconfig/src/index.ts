import { productList } from "./database/product.database";
import { IProduct, IProductCreateData } from "./interfaces/product.interfaces";

let generatedId = 1;

function createProduct(data: IProductCreateData): IProduct {
  // const newProduct = {
  //   id: generatedId,
  //   name: data.name,
  //   price: data.price,
  //   description: data.description
  // };
  const now = new Date();

  const newProduct = {
    id: generatedId,
    createdAt: now,
    ...data,
  };

  generatedId++;

  productList.push(newProduct);

  return newProduct;
}

const productData1: IProductCreateData = {
  name: "Computador",
  price: 100.5,
  description: "PC gamer da NASA",
};

const productData2: IProductCreateData = {
  name: "Cafeteira",
  price: 53.5,
  description: "Cafeteira plus ultra",
};

const product1 = createProduct(productData1);
const product2 = createProduct(productData2);

console.log("Database de Produtos:");
console.log(productList);
