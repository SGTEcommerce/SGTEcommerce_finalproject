export class Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;


    // all arguments constructor
    constructor(id: number, name: string, price: number, image: string, description: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.image  = image;
        this.description = description;
    }


}
