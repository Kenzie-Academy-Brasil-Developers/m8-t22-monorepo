export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  createdAt: Date;
}

export interface IProductCreateData {
  name: string;
  price: number;
  description: string;
}
