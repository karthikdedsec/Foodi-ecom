import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Product from "../models/product.js";
import APIFilters from "../utils/apiFilters.js";
import ErrorHandler from "../utils/errorHandler.js";

// get all products => /api/v1/products
export const getProducts = catchAsyncErrors(async (req, res, next) => {
  const apiFilters = new APIFilters(Product, req.query).search().filters();

  const getProducts = await apiFilters.query;

  res.status(200).json({
    numOfProducts: getProducts.length,
    products: getProducts,
  });
});

// create new product => api/v1/admin/products
export const newProduct = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user._id;

  const product = await Product.create(req.body);

  res.status(200).json({
    product,
  });
});

// get single product => api/v1/product/:id

export const getProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req?.params?.id);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }

  res.status(200).json({
    product,
  });
});

// update product => api/v1/admin/product/:id

export const updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req?.params?.id);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req?.params?.id, req.body, {
    new: true,
  });

  res.status(200).json({
    product,
  });
});

// delete product => api/v1/admin/product/:id

export const deleteProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req?.params?.id);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }

  await product.deleteOne();

  res.status(200).json({
    message: "product deleted",
  });
});
