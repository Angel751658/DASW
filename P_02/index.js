import { Product } from './products.js';
import './data_handler.js';
import { ShoppingCart } from './shopping_cart.js';
import { createProduct, getProducts, deleteProduct, updateProduct, findProduct, productListToHTML } from './data_handler.js';
// Mostrar productos en el contenedor

// Crear algunos productos de prueba
const producto1 = new Product("Manzana", "Frescas y deliciosas", "img/manzana.jpg", "kg", 20, 30, "Fruta");
const producto2 = new Product("Laptop", "Poderosa para tus tareas", "img/laptop.jpg", "unidad", 5, 15000, "Electrónica");

createProduct(producto1);
createProduct(producto2);


