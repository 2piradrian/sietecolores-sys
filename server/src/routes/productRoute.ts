import { Router } from "express";
import { ProductController } from "../controllers/productController";
import { ProductValidator } from "../validator/productValidator";

export const productRouter = Router();

productRouter.get("/", ProductValidator.getAll, ProductController.getAll);
productRouter.get("/:id", ProductValidator.getById, ProductController.getById);
productRouter.post("/", ProductValidator.create, ProductController.create);
productRouter.put("/:id", ProductValidator.update, ProductController.update);
productRouter.delete("/:id", ProductValidator.delete, ProductController.delete);
