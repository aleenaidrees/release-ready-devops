import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;
const APP_VERSION = process.env.APP_VERSION || "1.0.0";
const ENVIRONMENT = process.env.NODE_ENV || "development";

app.get("/", (req, res) => {
  console.log("Root endpoint requested");
  res.send("ReleaseReady is running");
});

app.get("/health", (req, res) => {
  console.log("Health check requested");
  res.status(200).json({
    status: "ok",
    environment: ENVIRONMENT,
    timestamp: new Date().toISOString()
  });
});

app.get("/version", (req, res) => {
  console.log("Version endpoint requested");
  res.status(200).json({
    app: "ReleaseReady",
    version: APP_VERSION,
    environment: ENVIRONMENT
  });
});

export default app;

app.listen(PORT, () => {
  console.log(`ReleaseReady server running on port ${PORT}`);
  console.log(`Environment: ${ENVIRONMENT}`);
});