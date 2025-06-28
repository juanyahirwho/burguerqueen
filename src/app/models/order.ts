import { QuantityProduct } from "./quantity-product";
import { User } from "./user";

export class Order {
    _id?: string;
    user: User; 
    products: QuantityProduct[]; //Los productos y su cantidad
    address?: string; 
}