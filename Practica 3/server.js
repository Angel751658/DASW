const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

// Cargar productos desde el archivo
let products = JSON.parse(fs.readFileSync('./app/data/products.json'));

app.get('/', (req, res) => {
  res.send('e-commerce app práctica 3');
});

app.listen(3000, () => console.log('Server running on port 3000'));
