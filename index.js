require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("<h1>Hello akash...!</h1>");
});
app.get("/vishal", (req, res) => {
  res.send("<h2>hello vishal bhai....!</h2>");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
