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

// get single product => api/v1/product/:id

export const getProduct = async (req, res, next) => {
  const product = await Product.findById(req?.params?.id);

  if (!product) {
    return res.status(404).json({
      error: "Product not found",
    });
  }

  res.status(200).json({
    product,
  });
};

// update product => api/v1/admin/product/:id

export const updateProduct = async (req, res, next) => {
  let product = await Product.findById(req?.params?.id);

  if (!product) {
    return res.status(404).json({
      error: "Product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req?.params?.id, req.body, {
    new: true,
  });

  res.status(200).json({
    product,
  });
};

// delete product => api/v1/admin/product/:id

export const deleteProduct = async (req, res, next) => {
  let product = await Product.findById(req?.params?.id);

  if (!product) {
    return res.status(404).json({
      error: "Product not found",
    });
  }

  await product.deleteOne();

  res.status(200).json({
    message: "product deleted",
  });
};
