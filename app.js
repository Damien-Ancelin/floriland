import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  //console.log(req);
  res.send("hello");
});

app.listen(port, () => {
  console.log(`serveur lancé sur le port : ${port}`);
});
