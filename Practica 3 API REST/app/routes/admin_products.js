const express = require('express');
const router = express.Router();
const dh = require('../controllers/data_handler');

// Middleware
function validateAdmin(req, res, next) {
  if (req.headers['x-auth'] !== 'admin') {
    return res.status(403).json({ error: 'Acceso no autorizado, no se cuenta con privilegios de administrador' });
  }
  next();
}
router.use(validateAdmin);

// Funciones
router.post('/', (req, res) => {
  try {
    const prod = dh.createProduct(req.body);
    res.status(201).json({ message: `Producto creado: ${prod.title}` });
  } catch (e) {
    res.status(e.status || 400).json({ error: e.message });
  }
});

router.put('/:id', (req, res) => {
  try {
    const updated = dh.updateProduct(req.params.id, req.body);
    res.json({ message: `Producto actualizado: ${updated.title}` });
  } catch (e) {
    res.status(e.status || 400).json({ error: e.message });
  }
});

router.delete('/:id', (req, res) => {
  try {
    const deleted = dh.deleteProduct(req.params.id);
    res.json({ message: `Producto borrado: ${deleted.title}` });
  } catch (e) {
    res.status(e.status || 400).json({ error: e.message });
  }
});

module.exports = router;




