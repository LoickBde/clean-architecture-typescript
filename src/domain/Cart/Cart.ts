import ProductType from "../types/Product.js";

class Cart {
  constructor() {}

  private readonly products: ProductType[] = [];

  public getProducts(): ProductType[] {
    return [...this.products];
  }

  public addProduct(product: ProductType): void {
    if (product.price < 0) {
      throw new Error("Product price cannot be negative");
    }

    if (this.products.find((p) => p.id === product.id)) {
      throw new Error("Product already in cart");
    }

    this.products.push(product);
  }

  public getTotalPrice(): number {
    return this.products.reduce((total, product) => total + product.price, 0);
  }

  public getTotalPriceWithDiscount(discountRate: number): number {
    return (
      this.products.reduce((total, product) => total + product.price, 0) *
      (1 - discountRate)
    );
  }
}

export default Cart;
