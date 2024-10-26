import express from "express";
import { flowers } from "./flowers.js";

const app = express();
const port = 8000;
const DIRNAME = import.meta.dirname;
const tabFlowers = flowers;

app.get("/", (req, res) => {
  //console.log(req);
  res.sendFile(DIRNAME + `/views/index.html`);
});

app.get("/fleurs/", (req, res) => {
  let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Acceuil | Floriland</title>
    </head>
    <body>
      <h1>Floriland - Bienvenue !</h1>
      <ul>
  `;

  for (const flower of tabFlowers) {
    html += `<li><a href="/fleurs/${flower}">${flower}</a></li>`;
  }

  html += `
    </ul>
    <a href="/">Acceuil</a>
    </body>
    </html>
  `;
  res.send(html);
});

app.get("/fleurs/:nomFleur", (req, res) => {
  const yourFlower = req.params.nomFleur;
  res.send(`Vous avez choisis la fleur : <b>${yourFlower}</b>
    <br>
    <a href="/fleurs">Retour au choix des fleurs</a>
  `);
})

app.listen(port, () => {
  console.log(`serveur lancé sur le port : ${port}`);
});
