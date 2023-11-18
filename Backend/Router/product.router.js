import { Router } from "express";
import { login, register } from "../Controllers/auth.controller.js";

const product = Router();

product.post("/add-product",addProduct)

export default product;