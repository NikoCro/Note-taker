const express = require("express");
const fs = require("fs");
const path = require("path");

// const api = require("./routes/index.js");
const database = require("./db/db.json");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// app.use("/api", api);

app.use(express.static("public"));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
