import { IProduct } from "./interfaces";

/*
  - TypeScript não consegue inferir tipos que não são
  primitivos: (array/object)
  tipos primitivos: (number, string, boolean, null, undefined)
*/
const productList: IProduct[] = [];
// erro
// productList.push(1);
// const p1: IProduct = { id: 1, name: "produto-exemplo", price: 12 };
// productList.push(p1);

let generatedId = 1;

function addProduct(
  name: string,
  price: number,
  description?: string
): IProduct {
  // const newProduct = {
  //   id: generatedId,
  //   name: name,
  //   price: price,
  //   description: description
  // }
  const newProduct = {
    id: generatedId,
    name,
    price,
    description,
  };

  // productList.push(1);
  productList.push(newProduct);

  // generatedId = generatedId + 1;
  // generatedId += 1;
  generatedId++;

  return newProduct;
}

/*
  Métodos de array que NÃO MUTAM o array (map, filter)
  - Retornam uma CÓPIA do array original
  Métodos de array que MUTAM o array original (splice, push)
*/
function deleteProduct(productId: number) {
  // const newProductList = productList.filter(
  //   (product) => product.id !== productId
  // );

  // console.log("newProductList", newProductList);
  const index = productList.findIndex((product) => product.id === productId);
  console.log("index ->", index);

  if (index === -1) {
    return "Product not found";
  }

  productList.splice(index, 1);

  console.log("productList -> ", productList);
  return "Product deleted!";
}

const product1 = addProduct("Computador", 3000);
const product2 = addProduct("Microfone", 600);
const product3 = addProduct("Teclado", 400);

// console.log(deleteProduct(1));
console.log(deleteProduct(55));

// console.log(productList);
