import { Router } from "express";
import { ProductController } from "../controllers/product.controller";

export const productRouter = Router();

const productController = new ProductController();

// Semanticamente adequada para API Rest (recurso no plural, tudo em minusculo)
productRouter.post("", productController.create);
productRouter.get("", productController.findAll);
productRouter.delete("/:productId", productController.delete);
