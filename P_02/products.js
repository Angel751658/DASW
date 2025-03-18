import { generateUUID } from './utils.js';
export class ProductException extends Error {
    constructor(message) {
        super(message);
        this.name = "ProductException";
    }
}

export class Product {
    #uuid;

    constructor(title, description, imageUrl, unit, stock, pricePerUnit, category) {
        this.#uuid = generateUUID();
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.unit = unit;
        this.stock = stock;
        this.pricePerUnit = pricePerUnit;
        this.category = category;
    }

    get uuid() {
        return this.#uuid;
    }
    set title(value) {
        if (!value || typeof value !== 'string') throw new ProductException("El título no puede estar vacío.");
        this._title = value;
    }

    get title() {
        return this._title;
    }
    set stock(value) {
        if (value < 0) throw new ProductException("El stock no puede ser negativo.");
        this._stock = value;
    }

    get stock() {
        return this._stock;
    }
    set pricePerUnit(value) {
        if (value < 0) throw new ProductException("El precio por unidad no puede ser negativo.");
        this._pricePerUnit = value;
    }
    get pricePerUnit() {
        return this._pricePerUnit;
    }

    static createFromJson(jsonValue) {
        try {
            const obj = JSON.parse(jsonValue);
            return new Product(
                obj.title,
                obj.description,
                obj.imageUrl,
                obj.unit,
                obj.stock,
                obj.pricePerUnit,
                obj.category
            );
        } catch (error) {
            throw new ProductException("Error al convertir JSON en Producto.");
        }
    }

    static createFromObject(obj) {
        return new Product(
            obj.title || "",
            obj.description || "",
            obj.imageUrl || "",
            obj.unit || "",
            obj.stock || 0,
            obj.pricePerUnit || 0,
            obj.category || ""
        );
    }

    static cleanObject(obj) {
        return {
            title: obj.title || "",
            description: obj.description || "",
            imageUrl: obj.imageUrl || "",
            unit: obj.unit || "",
            stock: obj.stock || 0,
            pricePerUnit: obj.pricePerUnit || 0,
            category: obj.category || ""
        };
    }

    toHTML() {
        return `
            <div class="product">
                <h3>${this.title}</h3>
                <p>${this.description}</p>
                <img src="${this.imageUrl}" alt="${this.title}" style="width:100px;">
                <p>Precio: $${this.pricePerUnit} / ${this.unit}</p>
                <p>Stock: ${this.stock}</p>
                <p>Categoría: ${this.category}</p>
            </div>
        `;
    }
}
