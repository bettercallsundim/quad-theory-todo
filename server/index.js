import cors from "cors";
import express from "express";
import { db } from "./db.js";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.get("/", (req, res) => {
  res.json(db);
});
app.listen(4000, () => {
  console.log("Server is running on port 3000");
});
