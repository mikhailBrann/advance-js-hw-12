import Gadget from "./domain/Gadget";
import Cart from "./service/Cart";

const gadgets = [
    new Gadget(4, 'iphone 5', 1000, 'phone', 3),
    new Gadget(5, 'lenovo note', 2000, 'notebook', 1),
];
  
const cart = new Cart();


gadgets.forEach(gadget => cart.add(gadget));
console.log(cart.items);