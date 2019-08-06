import { ShoppingCart } from "../classes/shoppingCart";
import { ILog } from "../interfaces/log";
import { IProduct } from "../interfaces/product";

export interface IShoppingCart {
    name: string;
    owner: string;
    maxCount: number;
    productList: IProduct[];
    addNewProduct(product: IProduct): ShoppingCart;
    removeProduct(id: number): ShoppingCart;
    getAveragePrice(): number;
    getProducts(): IProduct[];
    getFormattedListOfProducts(): string[];
    getTotalPrice(): number;
    getHistory(): ILog[];
}
