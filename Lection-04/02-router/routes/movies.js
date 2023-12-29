const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("movies");
});

router.get("/:id", (req, res) => {
  res.send(`movie ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("Create movies");
});

module.exports = router;
