import { Router } from "express";
import { addProduct } from "../Controllers/product.controller.js";

const product = Router();

product.post("/add-product", addProduct)

export default product;