const express = require("express");

const app = express();

// app.get("/books/1", (req, res) => {
//   res.send("Book 1");
// });

// app.get("/books/2", (req, res) => {
//   res.send("Book 2");
// });

app.get("/books/:bookId/authors/:authorId", (req, res) => {
  console.log("req.params: ", req.params);

  const { bookId, authorId } = req.params;
  res.send(`Book ${bookId}, Author ${authorId}`);
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
