import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import connectMongoDB from "./config/db.js";
import "dotenv/config";
import connectRedis from "./config/redis.js";
import { redisMiddleware } from "./middlewares/redisMiddleware.js";

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
await connectMongoDB();

// Connect to redis
const redisClient = await connectRedis();
app.use(redisMiddleware(redisClient));


// Routes
app.use("/api", routes);

// Global Error Handler
app.use(errorHandler);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
