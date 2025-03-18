const products = [];

function getProducts() {
    return products;
}

function getProductById(uuid) {
    return products.find(product => product.uuid === uuid);
}

function createProduct(product) {
    if (!(product instanceof Product)) {
        throw new ProductException("El producto no es válido.");
    }
    products.push(product);
}

function updateProduct(uuid, updatedProduct) {
    const index = products.findIndex(product => product.uuid === uuid);
    if (index === -1) throw new ProductException("Producto no encontrado.");
    products[index] = updatedProduct;
}

function deleteProduct(uuid) {
    const index = products.findIndex(product => product.uuid === uuid);
    if (index === -1) throw new ProductException("Producto no encontrado.");
    products.splice(index, 1);
}

function findProduct(query) {
    const [category, title] = query.split(":").map(str => str.trim());
    return products.filter(product =>
        (category && product.category.includes(category)) ||
        (title && product.title.includes(title))
    );
}

function productListToHTML(lista, htmlElement) {
    htmlElement.innerHTML = lista.map(product => product.toHTML()).join("");
}
