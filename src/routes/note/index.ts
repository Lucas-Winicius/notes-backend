import { Router } from "express";
import POST from "./POST";

const noteRoutes = Router();

noteRoutes.post("/note", POST);

export default noteRoutes;
