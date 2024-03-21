import express from "express";
import dotenv from "dotenv";
import ProductRoute from "./routes/product.route.js";
import { connectDataBase } from "./config/dbConnect.js";

const app = express();

dotenv.config({ path: "api/config/config.env" });

connectDataBase();

app.use(express.json());

app.use("/api/v1", ProductRoute);

app.listen(process.env.PORT, () => {
  console.log(`listening to port:${process.env.PORT} `);
});
