const express = require('express');
const router = express.Router();
const dh = require('../controllers/data_handler');

// Funciones
router.get('/', (req, res) => {
  try {
    const list = req.query.query ? dh.findProducts(req.query.query) : dh.getProducts();
    res.json(list);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.get('/:id', (req, res) => {
  try {
    const prod = dh.getProductById(req.params.id);
    res.json(prod);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
});

router.post('/cart', (req, res) => {
  if (!Array.isArray(req.body)) {
    return res.status(400).json({ error: 'Body debe ser un arreglo' });
  }
  try {
    const result = req.body.map(item => dh.getProductById(item.productUuid));
    res.json(result);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
});

module.exports = router;







