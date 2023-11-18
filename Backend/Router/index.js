import { Router } from "express";
import auth from "./auth.router.js";
import product from "./product.router.js";

const router = Router();

router.use("/auth",auth)
router.use("/product",product)

export default router;