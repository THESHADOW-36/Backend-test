import { Router } from "express";
import { login, register } from "../Controllers/auth.controller.js";

const auth = Router();

auth.post("/login",login)
auth.post("/register",register)

export default auth;