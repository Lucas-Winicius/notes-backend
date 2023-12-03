import express from "express";
import "dotenv/config";
import routes from "./src/routes/router";
import cors from "cors";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: "*",
  optionsSuccessStatus: 200
}));
app.use(routes);

app.listen(process.env.PORT, () => {
  console.info("Server started on port " + process.env.PORT);
});
