import express from "express";
import { productRouter } from "./routes/productRoute";
import { budgetRouter } from "./routes/budgetRoute";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	next();
});

app.use("/products", productRouter);
app.use("/budgets", budgetRouter);

app.listen(3333, () => console.log("Server in port 3333"));
