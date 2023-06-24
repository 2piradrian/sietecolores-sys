import express from "express";
import { productRouter } from "./routes/productRoute";
import { budgetRouter } from "./routes/budgetRoute";

const app = express();

app.use(express.json());

app.use("/products", productRouter);
app.use("/budgets", budgetRouter);

app.listen(3333, () => console.log("Server in port 3333"));
