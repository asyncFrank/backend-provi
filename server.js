// import express from "express";
const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

const app = express();

const userRoutes = require("./src/routes/UserRoutes");
const startupsRoutes = require("./src/routes/StartupRoutes");
const categoryRoutes = require("./src/routes/CategoryRoutes");
const classificationRoutes = require("./src/routes/ClassificationRoutes");
const sojaRoutes = require('./src/routes/SojaRoutes');
app.use(cors());

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://sacci-agk:Re2011_amorDeus-53@cluster0.p9x3nex.mongodb.net/api-startups",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((response) => {
    console.log("Conectado no MONGODB");
  });

app.use("/api/user", userRoutes);
app.use("/api/startups", startupsRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/classifications", classificationRoutes);
app.use("/api/periods", sojaRoutes);

app.listen(5000, () => {
  console.log("listening on port 5000 tche!");
});
