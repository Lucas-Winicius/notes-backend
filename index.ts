import express from "express";
import "dotenv/config";
import routes from "./src/routes/router";

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.info("Server started on port " + process.env.PORT);
});
