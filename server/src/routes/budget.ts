import { BudgetValidator } from "./../validator/budget";
import { Router } from "express";
import { BudgetController } from "../controllers/budget";

export const budgetRouter = Router();

budgetRouter.get("/", BudgetValidator.getAll, BudgetController.getAll);
budgetRouter.get("/:id", BudgetValidator.getById, BudgetController.getById);
budgetRouter.post("/", BudgetValidator.create, BudgetController.create);
