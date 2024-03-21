import mongoose from "mongoose";
import Product from "../models/product.js";
import products from "./data.js";

const seedProducts = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/foodi-v1");

    await Product.deleteMany();
    console.log("Products deleted");

    await Product.insertMany(products);

    console.log("products created");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
