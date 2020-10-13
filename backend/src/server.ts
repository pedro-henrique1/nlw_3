import express from "express";
import "./database/connection";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "ola" });
});

app.listen(3333);
