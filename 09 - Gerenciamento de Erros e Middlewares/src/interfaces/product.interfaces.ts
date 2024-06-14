export type Product = {
  id: number;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
};

// export type ProductCreate = {
//   name: string;
//   price: number;
// };
// export type ProductCreate = Pick<Product, "name" | "price">;
export type ProductCreate = Omit<Product, "id" | "createdAt" | "updatedAt">;
export type ProductUpdate = Partial<ProductCreate>;
