// Practica3/server.js
const express = require('express');
const path = require('path');
const dataHandler = require('./app/controllers/data_handler');
const productsRouter = require('./app/routes/products');
const adminRouter = require('./app/routes/admin_products');

const app = express();

// Cargar productos desde data/products.json
dataHandler.loadProducts();

// Middleware para parsear JSON
app.use(express.json());

// Rutas para servir las vistas de la Parte 1
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'app/views/home.html'));
});
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'app/views/home.html'));
});
app.get('/shopping_cart', (req, res) => {
  res.sendFile(path.join(__dirname, 'app/views/shopping_cart.html'));
});

// API Routers
app.use('/products', productsRouter);
app.use('/admin/products', adminRouter);

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


