import { Router } from "express";
import { BudgetController } from "../controllers/budget";

export const budgetRouter = Router();

budgetRouter.get("/", BudgetController.getAll);
budgetRouter.get("/:id", BudgetController.getById);
budgetRouter.post("/", BudgetController.create);
