"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_database_1 = require("./database/product.database");
let generatedId = 1;
function createProduct(data) {
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
    product_database_1.productList.push(newProduct);
    return newProduct;
}
const productData1 = {
    name: "Computador",
    price: 100.5,
    description: "PC gamer da NASA",
};
const productData2 = {
    name: "Cafeteira",
    price: 53.5,
    description: "Cafeteira plus ultra",
};
const product1 = createProduct(productData1);
const product2 = createProduct(productData2);
console.log("Database de Produtos:");
console.log(product_database_1.productList);
