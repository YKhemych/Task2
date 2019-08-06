import {Action} from "../interfaces/action";
import {ILog} from "../interfaces/log";
import {IProduct} from "../interfaces/product";
import {Log} from "./log";
import * as moment from "moment";

export class Product implements IProduct {
    public name: string;
    public description: string;
    public price: number;
    private shoppingCartName: string = "";
    private logs: ILog[] = [];

    constructor(name: string, description: string, price: number) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    public getShoppingCartName(): string {
        return this.shoppingCartName;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(newPrice: number): Product {
        if ( newPrice < this.price ) { throw new Error("Can't set smaller price than product has now"); }
        this.price = newPrice;
        return this;
    }

    public add(shoppingCartName: string): Product {
        this.shoppingCartName = shoppingCartName;
        this.logs.push(new Log(Action.ADD, moment().format('YYYY-MM-DD HH:mm:ss'), this, shoppingCartName));
        return this;
    }

    public removeProduct(): Product {
        this.logs.push(new Log(Action.REMOVE, moment().format('YYYY-MM-DD HH:mm:ss'), this, this.shoppingCartName));
        this.shoppingCartName = "";
        return this;
    }

    public getHistory(): ILog[] {
        return this.logs;
    }
}
