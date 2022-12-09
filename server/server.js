const express = require("express");
const app = express();

const PORT = 3001;

app.get("/home", (req, res) => {
  res.status(200).json({ message: "You are connected to the server" });
});

app.listen(PORT, () => {
  console.log("listening on " + PORT);
});
