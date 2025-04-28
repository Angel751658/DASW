const fs = require('fs');
const path = require('path');
const utils = require('./utils');

const dataFile = path.join(__dirname, '../../data/products.json');
let products = [];

function loadProducts() {
  try {
    const raw = fs.readFileSync(dataFile, 'utf8');
    products = JSON.parse(raw);
  } catch {
    products = [];
  }
}

function saveProducts() {
  fs.writeFileSync(dataFile, JSON.stringify(products, null, 2));
}

function getProducts() {
  return products;
}

function findProducts(query) {
  const [cat, title] = query.split(':').map(s => s.trim());
  return products.filter(p => {
    const matchCat = !cat || p.category.toLowerCase().includes(cat.toLowerCase());
    const matchTitle = !title || p.title.toLowerCase().includes(title.toLowerCase());
    return matchCat && matchTitle;
  });
}

function getProductById(id) {
  const prod = products.find(p => p.uuid === id);
  if (!prod) throw new Error('Producto no encontrado');
  return prod;
}

function createProduct(data) {
  const required = ['imageUrl','title','description','unit','category','pricePerUnit','stock'];
  const missing = required.filter(key => data[key] === undefined);
  if (missing.length) {
    const msg = `Faltan atributos: ${missing.join(', ')}`;
    const err = new Error(msg);
    err.status = 400;
    throw err;
  }
  const newProd = { uuid: utils.generateUUID(), ...data };
  products.push(newProd);
  saveProducts();
  return newProd;
}

function updateProduct(id, data) {
  const idx = products.findIndex(p => p.uuid === id);
  if (idx < 0) {
    const err = new Error('Producto no existe');
    err.status = 404;
    throw err;
  }
  Object.assign(products[idx], data);
  saveProducts();
  return products[idx];
}

function deleteProduct(id) {
  const idx = products.findIndex(p => p.uuid === id);
  if (idx < 0) {
    const err = new Error('Producto no existe');
    err.status = 404;
    throw err;
  }
  const [deleted] = products.splice(idx, 1);
  saveProducts();
  return deleted;
}

module.exports = {
  loadProducts,
  getProducts,
  findProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};



