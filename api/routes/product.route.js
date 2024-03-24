import express from "express";
import {
  deleteProduct,
  getProduct,
  getProducts,
  newProduct,
  updateProduct,
} from "../controllers/product.controller.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";

const router = express.Router();

router.route("/products").get(isAuthenticatedUser, getProducts);
router.route("/admin/products").post(newProduct);
router.route("/product/:id").get(getProduct);
router.route("/admin/product/:id").put(updateProduct);
router.route("/admin/product/:id").delete(deleteProduct);

export default router;
