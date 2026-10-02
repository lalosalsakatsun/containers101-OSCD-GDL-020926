const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/api/status", (_req, res) => {
  res.json({
    application: "Containers 101",
    version: process.env.APP_VERSION || "1.0.0",
    status: "running",
    hostname: os.hostname(),
    containerized: Boolean(process.env.CONTAINERIZED)
  });
});

app.get("/api/info", (_req, res) => {
  res.json({
    node: process.version,
    platform: process.platform,
    architecture: process.arch,
    hostname: os.hostname()
  });
});

app.get("/api/student", (_req, res) => {
  res.json({
    name: process.env.STUDENT_NAME || "Your name",
    career: process.env.CAREER || "Your career",
    containerized: true
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Containers 101 running on http://localhost:${PORT}`);
});
