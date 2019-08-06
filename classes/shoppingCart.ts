import * as _ from "lodash";
import * as moment from "moment";
import {Action} from "../interfaces/action";
import {ILog} from "../interfaces/log";
import {IProduct} from "../interfaces/product";
import {IShoppingCart} from "../interfaces/shoppingCart";
import {Log} from "./log";

export class ShoppingCart implements IShoppingCart {
    public name: string;
    public owner: string;
    public maxCount: number;
    public productList: IProduct[] = [];
    private logs: ILog[] = [];

    constructor(name: string, owner: string, maxCount: number) {
        this.name = name;
        this.owner = owner;
        this.maxCount = maxCount;
    }

    public addNewProduct(product: IProduct): ShoppingCart {
        if (this.productList.length === this.maxCount) {
            // _.min(this.productList.map((p) => p.price));
            this.removeProduct(_.findIndex(this.productList,
                {price: _.min(this.productList.map((p) => p.price))}));
        }
        this.productList.push(product.add(this.name));
        this.logs.push(new Log(Action.ADD, moment().format("YYYY-MM-DD HH:mm:ss"), product, this.name));
        return this;
    }
    public removeProduct(id: number): ShoppingCart {
        this.logs.push(new Log(
            Action.REMOVE,
            moment().format("YYYY-MM-DD HH:mm:ss"),
            this.productList[id].removeProduct(),
            this.name));
        this.productList.splice(id, 1);
        return this;
    }
    public getAveragePrice(): number {
        return this.getTotalPrice() / this.productList.length;
    }
    public getProducts(): IProduct[] {
        return this.productList;
    }
    public getFormattedListOfProducts(): string[] {
        return this.productList.map((product) => {
            return `${product.name} - is on ${product.getShoppingCartName()} from ` +
                `${ _.find(this.logs.reverse(), {product, action: Action.ADD}).datetime}.` +
                ` Detailed product description: ${product.description}`;
        });
    }

    public getTotalPrice(): number {
        return this.productList.reduce((intermediateValue, currentValue) => {
            return intermediateValue + currentValue.price;
        }, 0);
    }
    public getHistory(): ILog[] {
        return this.logs;
    }
}
