import {Action} from "../interfaces/action";
import {ILog} from "../interfaces/log";
import {IProduct} from "../interfaces/product";

export class Log implements ILog {
    public action: Action;
    public datetime: string;
    public product: IProduct;
    public shoppingCartName: string;
    constructor(action: Action, datetime: string, product: IProduct, shoppingCartName: string) {
        this.action = action;
        this.datetime = datetime;
        this.product = product;
        this.shoppingCartName = shoppingCartName;
    }
}
