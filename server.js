const express = require("express");
const fs = require("fs");
const path = require("path");
const uniqid = require("uniqid");
// const api = require("./routes/index.js");
const database = require("./db/db.json");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// app.use("/api", api);

app.use(express.static("public"));

// app.use("/notes/:id", function (req, res, next) {
//   console.log("Request Id:", req.params.id);
//   next();
// });

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);
app.get("/api/notes", (req, res) => {
  res.json(database);
});

app.post("/api/notes", (req, res) => {
  //database is an array
  //req.body is the new note
  let note = { ...req.body };
  note.id = uniqid();
  database.push(note);
  fs.writeFile("./db/db.json", JSON.stringify(database), (err) =>
    console.log(err)
  );
  res.json(database);
});

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);
console.log(__dirname);
// // GET Route for feedback page
// app.get("/feedback", (req, res) =>
//   res.sendFile(path.join(__dirname, "/public/pages/feedback.html"))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
