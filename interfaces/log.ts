import {Action} from "./action";
import {IProduct} from "./product";

export interface ILog {
    action: Action;
    datetime: Date;
    product: IProduct;
    shoppingCartName: string;
}
