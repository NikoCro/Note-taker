const express = require("express");
// const path = require("path");
// const api = require("./routes/index.js");
const database = require("./db/db.json");

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/api", api);

app.use(express.static("public"));

app.get("/api/notes", (req, res) => {
  res.json(database);
});

app.post("/hello", (req, res) => {
  //database is an array
  //req.body is the new note
  database.push(req.body);
  res.json(database);
});

// // GET Route for homepage
// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "/public/index.html"))
// );

// // GET Route for feedback page
// app.get("/feedback", (req, res) =>
//   res.sendFile(path.join(__dirname, "/public/pages/feedback.html"))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
