const producto1 = new Product("Manzana", "Frescas y deliciosas", "img/manzana.jpg", "kg", 20, 30, "Fruta");
const producto2 = new Product("Laptop", "Poderosa para tus tareas", "img/laptop.jpg", "unidad", 5, 15000, "Electrónica");

createProduct(producto1);
createProduct(producto2);

console.log("Productos iniciales:", getProducts());

const carrito = new ShoppingCart();
carrito.addItem(producto1.uuid, 2);
carrito.addItem(producto2.uuid, 1);
console.log("Total del carrito:", carrito.calculateTotal());
