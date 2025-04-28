// server.js (raíz de Practica3)
const express = require('express');
const path = require('path');
const dataHandler = require('./app/controllers/data_handler');
const productsRouter = require('./app/routes/products');
const adminRouter = require('./app/routes/admin_products');

const app = express();

// Carga inicial de productos
dataHandler.loadProducts();

// Middleware para parsear JSON
app.use(express.json());

// Servir estáticos desde app/views
app.use(express.static(path.join(__dirname, 'app/views')));

// Vistas HTML
app.get(['/', '/home'], (req, res) => {
  res.sendFile(path.join(__dirname, 'app/views/home.html'));
});
app.get('/shopping_cart', (req, res) => {
  res.sendFile(path.join(__dirname, 'app/views/shopping_cart.html'));
});

// API
app.use('/products', productsRouter);
app.use('/admin/products', adminRouter);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
