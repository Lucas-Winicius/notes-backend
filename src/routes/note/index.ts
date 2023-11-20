import { Router } from "express";
import POST from "./POST";
import PUT from "./PUT";
import DELETE from "./DELETE";

const noteRoutes = Router();

noteRoutes.post("/note", POST);
noteRoutes.put("/note", PUT);
noteRoutes.delete("/note/:id", DELETE);

export default noteRoutes;
