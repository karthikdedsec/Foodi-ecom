import Product from "../models/product.js";

// get all products => /api/v1/products
export const getProducts = async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    numOfProducts: products.length,
    products,
  });
};

// create new product => api/v1/admin/products
export const newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(200).json({
    product,
  });
};
