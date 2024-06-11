import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("COnnected to Database");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port} 🔥`);
});
