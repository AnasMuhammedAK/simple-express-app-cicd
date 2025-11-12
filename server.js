import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("🚀 Hello from Express + Docker + EC2 CI/CD!");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
