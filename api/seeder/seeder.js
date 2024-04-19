import mongoose from "mongoose";
import Product from "../models/product.js";
import products from "./data.js";

const seedProducts = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://karthikkap121:ltq9N8jAlIMe3RUI@foodi.kwxuxcp.mongodb.net/foodi-v1?retryWrites=true&w=majority&appName=foodi"
    );

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
