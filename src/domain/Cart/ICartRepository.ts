import Cart from "./Cart.js";

interface ICartRepository {
  load(cartId: number): Cart;

  save(cartId: number, cart: Cart): void;
}

export default ICartRepository;
