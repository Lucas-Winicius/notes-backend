import express from "express";
import "dotenv/config";

const app = express();

app.all("/", (req, res) => {
  res.send("OK");
});

app.listen(process.env.PORT, () => {
  console.info("Server started");
});
