const express = require("express");

const bookSchema = require("./schema/books");

const app = express();

const jsonParser = express.json();

app.get("/books", (req, res) => {
  res.send("Books");
});

app.post("/books", jsonParser, (req, res) => {
  const response = bookSchema.validate(req.body, { abortEarly: false });

  if (typeof response.error !== "undefined") {
    return res
      .status(400)
      .send(response.error.details.map((err) => err.message).join(", "));
  }

  res.status(201).send({ ...req.body, id: Date.now() });
});

app.listen(8080, () => {
  console.log("Server running");
});
