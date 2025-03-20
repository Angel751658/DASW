import { getProductById } from './data_handler.js';

export class ShoppingCartException extends Error {
    constructor(message) {
        super(message);
        this.name = "CartException";
    }
}

export class ProductProxy {
    constructor(productUuid, amount) {
        this.productUuid = productUuid;
        this.amount = amount;
    }
}

export class ShoppingCart {
    #proxies = [];
    #products = [];

    addItem(productUuid, amount) {
        const existingProxy = this.#proxies.find(proxy => proxy.productUuid === productUuid);
        if (existingProxy) {
            existingProxy.amount += amount;
        } else {
            this.#proxies.push(new ProductProxy(productUuid, amount));
        }
    }

    updateItem(productUuid, newAmount) {
        const proxy = this.#proxies.find(proxy => proxy.productUuid === productUuid);
        if (!proxy) 
            throw new ShoppingCartException("Producto no encontrado en el carrito.");
        
        if (newAmount < 0) 
            throw new ShoppingCartException("La cantidad no puede ser negativa.");

        if (newAmount === 0) {
            this.removeItem(productUuid);
        } else {
            proxy.amount = newAmount;
        }
    }

    removeItem(productUuid) {
        this.#proxies = this.#proxies.filter(proxy => proxy.productUuid !== productUuid);
    }

    calculateTotal() {
        return this.#proxies.reduce((total, proxy) => {
            const product = getProductById(proxy.productUuid);
            return total + (product ? product.pricePerUnit * proxy.amount : 0);
        }, 0);
    }
}











