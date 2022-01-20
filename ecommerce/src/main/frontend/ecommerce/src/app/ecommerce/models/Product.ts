export class Product {
    id: number;
    name: string;
    price: number;
    image: string;
    oldPrice: number;
    description: string;

    // all arguments constructor
    constructor(id: number, name: string, price: number, image: string, oldPrice: number,  description: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.image  = image;
        this.oldPrice  = oldPrice;
        this.description  = description;
    }

}
