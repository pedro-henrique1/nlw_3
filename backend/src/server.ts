import express = require("express");
import "./database/connection";
import path from "path";
import "express-async-errors";
import router from "./rotes";
import errorHandler from "./error/handle";
import cors from "cors";

const app = express();
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.use(router);
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);
app.listen(3333);
