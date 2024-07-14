import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Gadget from '../domain/Gadget';

const movieList = [
  new Movie(1, 'Movie 1', 120, 2019, 'USA', 'Movie 1 tagline', ['horror', 'action'], '1h 30m'),
  new Movie(2, 'Movie 2', 100, 2019, 'USA', 'Movie 2 tagline', ['horror', 'action'], '1h 30m'),
  new Movie(3, 'Movie 3', 300, 2019, 'USA', 'Movie 3 tagline', ['horror', 'action'], '1h 30m'),
];

const gadgets = [
  new Gadget(4, 'iphone 5', 1000, 'phone', 2),
  new Gadget(5, 'lenovo note', 2000, 'notebook', 1),
];


test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toEqual(0);
});

test('cart Method calcSummCoast', () => {
  const cart = new Cart();
  movieList.forEach(movie => cart.add(movie));

  expect(cart.calcSummCoast()).toEqual(520);

  gadgets.forEach(gadget => cart.add(gadget));
  expect(cart.calcSummCoast()).toEqual(4520);
});

test('cart Method calcSummCoastWithDiscount', () => {
  const cart = new Cart();
  movieList.forEach(movie => cart.add(movie));

  expect(cart.calcSummCoastWithDiscount(10)).toEqual(468);
});

test('cart Method removeToBasket', () => {
  const cart = new Cart();
  movieList.forEach(movie => cart.add(movie));

  cart.removeToBasket(1);

  expect(cart.items).toEqual([movieList[1], movieList[2]]);

  cart.add(gadgets[0]);
  cart.removeToBasket(4);

  const testGadgetByDecrementQuantity =new Gadget(4, 'iphone 5', 1000, 'phone', 1);

  expect(cart.items).toEqual([movieList[1], movieList[2], testGadgetByDecrementQuantity]);

  cart.removeToBasket(4);
  expect(cart.items).toEqual([movieList[1], movieList[2]]);
});