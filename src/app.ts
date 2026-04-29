import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("ReleaseReady is running");
});

app.get("/health", (req, res) => {
  console.log("Health check requested");
  res.status(200).json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`ReleaseReady server running on port ${PORT}`);
});

export default app;