import { Router } from "express";
import POST from "./POST";
import GET from "./GET";
import PUT from "./PUT";
import DELETE from "./DELETE";

const userRoutes = Router();

userRoutes.post("/user", POST);
userRoutes.get("/user", GET);
userRoutes.put("/user", PUT);
userRoutes.delete("/user", DELETE);

export default userRoutes;
