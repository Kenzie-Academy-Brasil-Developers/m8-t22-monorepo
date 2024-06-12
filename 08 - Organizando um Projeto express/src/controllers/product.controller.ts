import { Request, Response } from "express";
import { generateNextId, productList } from "../database/inMemory.database";
import { ProductService } from "../services/product.service";

/*
  CONTROLLERS
  - Manuear requisições (requests / entrada) e respostas (responses / saída)
*/

export class ProductController {
  public create = (req: Request, res: Response) => {
    const productService = new ProductService();

    const newProduct = productService.create(req.body);

    // 201 -> CREATED
    return res.status(201).json(newProduct);
  };

  public findAll = (req: Request, res: Response) => {
    const productService = new ProductService();
    const products = productService.findAll();

    return res.json(products);
  };

  public delete = (req: Request, res: Response) => {
    const productService = new ProductService();
    productService.delete(Number(req.params.productId));

    return res.status(204).json();
  };
}
