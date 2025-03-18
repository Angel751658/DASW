import { Product } from './products.js';
import { ShoppingCart } from './shopping_cart.js';
import { createProduct, getProducts, deleteProduct, updateProduct, findProduct } from './data_handler.js';

/*const producto1 = new Product("Manzana", "Frescas y deliciosas", "img/manzana.jpg", "kg", 20, 30, "Fruta");
const producto2 = new Product("Laptop", "Poderosa para tus tareas", "img/laptop.jpg", "unidad", 5, 15000, "Electrónica");

createProduct(producto1);
createProduct(producto2);

console.log("Productos iniciales:", getProducts());

const carrito = new ShoppingCart();
carrito.addItem(producto1.uuid, 2);
carrito.addItem(producto2.uuid, 1);
console.log("Total del carrito:", carrito.calculateTotal());
*/

// Crear productos iniciales
const producto1 = new Product("Manzana", "Frescas y deliciosas", "img/manzana.jpg", "kg", 20, 30, "Fruta");
const producto2 = new Product("Laptop", "Poderosa para tus tareas", "img/laptop.jpg", "unidad", 5, 15000, "Electrónica");
const producto3 = new Product("Plátano", "Dulces y frescos", "img/platano.jpg", "kg", 15, 25, "Fruta");

createProduct(producto1);
createProduct(producto2);
createProduct(producto3);

console.log("Productos iniciales:", getProducts());

// Actualizar un producto
const productoActualizado = new Product("Manzana Roja", "Dulces y jugosas", "img/manzana-roja.jpg", "kg", 25, 35, "Fruta");
updateProduct(producto1.uuid, productoActualizado);
console.log("Después de actualizar producto 1:", getProducts());

// Eliminar un producto
deleteProduct(producto2.uuid);
console.log("Después de eliminar el producto 2:", getProducts());

// Búsquedas
console.log("Búsqueda por categoría 'Fruta':", findProduct("Fruta:"));
console.log("Búsqueda por nombre 'Manzana':", findProduct(":Manzana"));
console.log("Búsqueda combinada 'Fruta:Manzana':", findProduct("Fruta:Manzana"));

// Pruebas del carrito de compras
const carrito = new ShoppingCart();

carrito.addItem(producto1.uuid, 3);
carrito.addItem(producto3.uuid, 2);

console.log("Carrito después de agregar productos:", carrito);

carrito.updateItem(producto1.uuid, 1); // Reducir cantidad del producto 1
console.log("Carrito después de actualizar cantidades:", carrito);

carrito.removeItem(producto3.uuid); // Eliminar el producto 3
console.log("Carrito después de eliminar el producto 3:", carrito);

console.log("Total del carrito:", carrito.calculateTotal());


