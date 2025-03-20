import { Product, ProductException } from './products.js';

const products = [];

export function getProducts() {
    return products;
}

export function getProductById(uuid) {
    return products.find(product => product.uuid === uuid);
}

export function createProduct(product) {
    if (!(product instanceof Product)) {
        throw new ProductException("Producto no válido.");
    }
    products.push(product);
}

export function updateProduct(uuid, updatedProduct) {
    const index = products.findIndex(product => product.uuid === uuid);
    if (index === -1) {
        throw new ProductException("Producto no encontrado.");
    }
    products[index] = updatedProduct;
}

export function deleteProduct(uuid) {
    const index = products.findIndex(product => product.uuid === uuid);
    if (index === -1) {
        throw new ProductException("Producto no encontrado.");
    }
    products.splice(index, 1);
}

export function findProduct(query) {
    const [category, title] = query.split(":").map(str => str.trim());
    return products.filter(product => (category && product.category.includes(category)) || (title && product.title.includes(title)));
}

export function productListToHTML(lista, htmlElement) {
    htmlElement.innerHTML = lista.map(product => product.toHTML()).join("");
}











