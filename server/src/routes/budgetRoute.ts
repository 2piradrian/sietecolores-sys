import { Router } from "express";
import { BudgetController } from "../controllers/budgetController";

export const budgetRouter = Router();

budgetRouter.get("/", BudgetController.getAllBudgets);
budgetRouter.get("/:id", BudgetController.getBudgetById);
budgetRouter.post("/", BudgetController.createBudget);
