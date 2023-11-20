import { Router } from "express";
import ALL from "./ALL";

const loginMethods = Router();

loginMethods.all("/login", ALL);

export default loginMethods;
