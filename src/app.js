import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", routes);

// Global Error Handler
app.use(errorHandler);

export default app;
