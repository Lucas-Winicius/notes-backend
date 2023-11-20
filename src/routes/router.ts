import { Router } from "express";
import userRoutes from "./user";
import noteRoutes from "./note";
import loginMethods from "./login";

const routes = Router();

routes.use(userRoutes);
routes.use(noteRoutes);
routes.use(loginMethods);

export default routes;
