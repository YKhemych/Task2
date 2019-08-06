import {Product} from "./classes/product";
import {ShoppingCart} from "./classes/shoppingCart";

const sc1 = new ShoppingCart("sc1", "user1", 4);

const apple = new Product("apple", "Good apple", 10);
const banana = new Product("banana", "Good banana", 20);
const orange = new Product("orange", "Very tasty orange", 30);
const orange1 = new Product("orange1", "Very tasty orange1", 35);
const orange2 = new Product("orange2", "Very tasty orange2", 30);

sc1.addNewProduct(apple).addNewProduct(banana);
sc1.removeProduct(0);

console.log(`Apple price ${apple.getPrice()}`);
console.log(`Apple price after changing ${apple.setPrice(45).getPrice()}`);
console.log("Apple history - ", apple.getHistory());

sc1.addNewProduct(orange).addNewProduct(orange1).addNewProduct(orange2);
console.log(`Total price - ${sc1.getTotalPrice()}`);
console.log(`Average price - ${sc1.getAveragePrice()}`);

console.log("All products - ", sc1.getProducts());

sc1.addNewProduct(apple);
console.log("All products after adding apple- ", sc1.getProducts());

console.log(sc1.getFormattedListOfProducts());

console.log("Shopping cart history - ", sc1.getHistory());
