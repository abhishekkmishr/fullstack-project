import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import cors from "cors";
import userRouter from "./src/routes/user.routes.js";
import cartRouter from "./src/routes/cart.routes.js";
import productRouter from "./src/routes/product.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Middlewares
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(cookieParser());

// Routes
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the home page");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

export default app;