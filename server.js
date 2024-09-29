const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon site de musique !');
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
