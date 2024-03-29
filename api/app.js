import express from "express";
import dotenv from "dotenv";
import ProductRoute from "./routes/product.route.js";
import AuthRoute from "./routes/auth.route.js";
import OrderRoute from "./routes/order.route.js";
import { connectDataBase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/errors.js";
import cookieParser from "cookie-parser";

const app = express();

//handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err}`);
  console.log("shutting down due to uncaught exception");
  process.exit(1);
});

dotenv.config({ path: "api/config/config.env" });

connectDataBase();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", ProductRoute);
app.use("/api/v1", AuthRoute);
app.use("/api/v1", OrderRoute);

app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
  console.log(`listening to port:${process.env.PORT} `);
});

//handle unhandled promise rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err}`);
  console.log("shutting down server due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
