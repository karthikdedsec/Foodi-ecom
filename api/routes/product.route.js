import express from "express";
import {
  createProductReview,
  deleteProduct,
  getProduct,
  getProducts,
  newProduct,
  updateProduct,
} from "../controllers/product.controller.js";
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js";

const router = express.Router();

router.route("/products").get(getProducts);
router
  .route("/admin/products")
  .post(isAuthenticatedUser, authorizeRoles("admin"), newProduct);
router.route("/product/:id").get(getProduct);
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);
router
  .route("/admin/product/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route("/reviews").put(isAuthenticatedUser, createProductReview);

export default router;
