import { Router } from "express";
import userRoutes from "./user";
import noteRoutes from "./note";

const routes = Router();

routes.use(userRoutes);
routes.use(noteRoutes);

export default routes;
