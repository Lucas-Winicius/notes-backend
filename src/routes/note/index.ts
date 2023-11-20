import { Router } from "express";
import POST from "./POST";
import PUT from "./PUT";

const noteRoutes = Router();

noteRoutes.post("/note", POST);
noteRoutes.put("/note", PUT);

export default noteRoutes;
