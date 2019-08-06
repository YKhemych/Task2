import { ILog } from "../interfaces/log";
import { IProduct } from "../interfaces/product";
import { ShoppingCart } from "../classes/shoppingCart";

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
