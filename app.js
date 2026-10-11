import products from "./products.js";
import config from "./config.js";
import { totalPrice, inStockCount, formatPrice } from "./utils.js";
import { totalPrice as sum } from "./utils.js";

console.log(
  Math.round(totalPrice(products) * (1 + config.gst))
);

console.log(sum(products) === totalPrice(products));
products.forEach(p => {
  console.log(`${p.name} - ${formatPrice(p.price)}`);
});