const express = require('express');
const path = require('path');
const dataHandler = require('./app/controllers/data_handler');
const productsRouter = require('./app/routes/products');
const adminRouter = require('./app/routes/admin_products');

const app = express();

dataHandler.loadProducts();

// Middleware
app.use(express.json());

app.use(express.static(path.join(__dirname, 'app/views')));

// HTML
app.get(['/', '/home'], (req, res) => {
  res.sendFile(path.join(__dirname, 'app/views/home.html'));
});
app.get('/shopping_cart', (req, res) => {
  res.sendFile(path.join(__dirname, 'app/views/shopping_cart.html'));
});


app.use('/products', productsRouter);
app.use('/admin/products', adminRouter);
app.listen(3000, () => console.log('Server running on http://localhost:3000'));









