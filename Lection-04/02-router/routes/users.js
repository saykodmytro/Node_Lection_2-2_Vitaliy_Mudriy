const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("users");
});

router.get("/:id", (req, res) => {
  res.send(`user ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("Create users");
});

module.exports = router;
