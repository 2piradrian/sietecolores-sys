import express, { NextFunction, Request, Response } from "express";
import { productRouter } from "./routes/product";
import { budgetRouter } from "./routes/budget";

const app = express();

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	next();
});

app.use("/products", productRouter);
app.use("/budgets", budgetRouter);

app.listen(3333, () => console.log("Server in port 3333"));
