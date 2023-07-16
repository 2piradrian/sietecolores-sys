import { Router } from "express";
import { BudgetController } from "../controllers/budgetController";

export const budgetRouter = Router();

budgetRouter.get("/", BudgetController.getAll);
budgetRouter.get("/:id", BudgetController.getById);
budgetRouter.post("/", BudgetController.create);
