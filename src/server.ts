import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import db from "./config/db.js";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", routes);

// Global Error Handler
app.use(errorHandler);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
