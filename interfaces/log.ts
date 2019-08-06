import {Action} from "./action";
import {IProduct} from "./product";

export interface ILog {
    action: Action;
    datetime: string;
    product: IProduct;
    shoppingCartName: string;
}
