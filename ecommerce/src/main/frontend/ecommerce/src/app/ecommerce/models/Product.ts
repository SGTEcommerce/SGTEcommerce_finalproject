export class Product {
    id: number;
    name: string;
    price: number;
    image: string;

    // all arguments constructor
    constructor(id: number, name: string, price: number, image: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.image  = image;
    }


}
