import { Product } from "../classes/product";
import {ILog} from "./log";

export interface IProduct {
    name: string;
    description: string;
    price: number;
    getShoppingCartName(): string;
    getPrice(): number;
    setPrice(price: number): Product;
    add(shoppingCartName: string): Product;
    removeProduct(): Product;
    getHistory(): ILog[];
}
