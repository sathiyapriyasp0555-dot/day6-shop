export const totalPrice = (list) =>
  list.reduce((sum, product) => sum + product.price, 0);

export const inStockCount = (list) =>
  list.filter((product) => product.inStock).length;

export const formatPrice = (n) =>
  "₹" + n.toLocaleString("en-IN");
export const applyDiscount = (list, percent) =>
  list.map(p => ({
    ...p,
    price: p.price * (1 - percent / 100)
  }));