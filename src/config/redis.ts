import { createClient } from "redis";

const connectRedis = async () => {
  const client = createClient({
    url: process.env.REDIS_URL || "redis://localhost:6379",
  });

  client.on("error", (err) => console.error("Redis Error:", err));

  try {
    await client.connect();
    console.log("✅ Redis connected!");
    return client;
  } catch (error) {
    console.error("Redis connection failed:", error);
    throw error;
  }
};

export default connectRedis;
