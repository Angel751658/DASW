import { Product } from './products.js';
import { ShoppingCart } from './shopping_cart.js';
import { createProduct, getProducts, updateProduct, deleteProduct,findProduct} from './data_handler.js';

// Poblar lista de productos
const producto1 = new Product("WOLVERINE: WEAPON X", "The awesome origin of Wolverine!", "https://m.media-amazon.com/images/I/91taocHhtkL._SY425_.jpg", "Wolverine", 20, 30, "Marvel");
const producto2 = new Product("ULTIMATE SPIDER-MAN OMNIBUS VOL. 1", "In the year 2000, Marvel launched the Ultimate Universe, reinventing Spider-Man and his mythos for a new millennium!", "https://m.media-amazon.com/images/I/81wEY8KCubL._SY385_.jpg", "Spider-man", 15, 25, "Marvel");
const producto3 = new Product("Batman and Son", "The mysterious Talia, daughter of arch villain Ra's al Ghul and Batman's one-time love,", "https://m.media-amazon.com/images/I/71wv88DbJwL._SY425_.jpg", "Batman", 15, 35, "DC");
const producto4 = new Product("X-Men Red by Al Ewing Vol. 1", "Who can save the red planet? The mutants of Arakko spent millennia scarred by war", "https://m.media-amazon.com/images/I/816ZkMO8gWL._SY425_.jpg", "X-Men", 10, 50, "Marvel");
const producto5 = new Product("Superman 1: Son of Superman", "When the Man of Steel died defending his adopted home", "https://m.media-amazon.com/images/I/81H0Tnb+8QL._SY425_.jpg", "Superman", 18, 20, "DC");

createProduct(producto1);
createProduct(producto2);
createProduct(producto3);
createProduct(producto4);
createProduct(producto5);

console.log("\nLista de productos inicial:", getProducts());

// Actualizar un producto
const productoActualizado = new Product("WOLVERINE: WEAPON X", "The awesome origin of Wolverine!", "https://m.media-amazon.com/images/I/91taocHhtkL._SY425_.jpg", "Wolverine", 25, 35, "Marvel");
updateProduct(producto1.uuid, productoActualizado);

console.log("\nDespués de actualizar producto 1:", getProducts());

// Eliminar un producto
deleteProduct(producto2.uuid);
console.log("\nDespués de eliminar el producto 2:", getProducts());

// Búsquedas
console.log("Búsqueda por categoría 'Marvel':", findProduct("Marvel:"));
console.log("Búsqueda por nombre 'Superman':", findProduct(":Superman"));
console.log("Búsqueda combinada 'Marvel:Batman':", findProduct("Marvel:Batman"));

// Pruebas del carrito de compras
const carrito = new ShoppingCart();

// Agregar 4 elementos al carrito
carrito.addItem(productoActualizado.uuid, 2);
carrito.addItem(producto3.uuid, 3);
carrito.addItem(producto4.uuid, 1);
carrito.addItem(producto5.uuid, 1);

console.log("\nCarrito:", carrito.showCart());

// Actualizar uno de los elementos del carrito
carrito.updateItem(productoActualizado.uuid, 4);
console.log("\nCarrito después de actualizar cantidades:", carrito.showCart());

// Eliminar un elemento del carrito
carrito.removeItem(producto3.uuid);
console.log("\nCarrito después de eliminar el producto 3:", carrito.showCart());

// Calcular el total del carrito
console.log("\nTotal del carrito:", carrito.calculateTotal());









