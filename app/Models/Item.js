import { generateId } from "../Utils/generatedId.js";

export class Item {
    constructor(name, desc, price, img = 'https://placebear.com/200/200') {
        this.name = name;
        this.desc = desc
        this.price = price;
        this.img = img;
        this.id = generateId()
    }
}