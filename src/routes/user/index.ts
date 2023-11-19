import { Router } from "express";
import POST from "./POST";
import GET from "./GET";

const userRoutes = Router();

userRoutes.post("/user", POST);
userRoutes.get("/user", GET);

export default userRoutes;
