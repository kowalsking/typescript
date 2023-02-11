class Product {
  constructor(public id: number, public title: string, public price: number) {}
}

class Delivery {
  constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
  constructor(public date: Date, public address: string) {
    super(date);
  }
}
class ShopDelivery extends Delivery {
  constructor(public shopId: number) {
    super(new Date());
  }
}

type DeliveryOptions = HomeDelivery | ShopDelivery;

class Card {
  private products: Product[] = [];
  private delivery!: DeliveryOptions;

  public addProduct(product: Product): void {
    this.products.push(product);
  }

  public deleteProduct(productId: number): void {
    this.products = this.products.filter((p: Product) => p.id !== productId);
  }

  public getSum(): number {
    return this.products
      .map((p: Product) => p.price)
      .reduce((p1: number, p2: number) => p1 + p2);
  }

  public setDelivery(delivery: DeliveryOptions): void {
    this.delivery = delivery;
  }

  public checkout() {
    if (this.products.length === 0) {
      throw new Error("No products");
    }
    if (!this.delivery) {
      throw new Error("No delivery type");
    }

    return {
      success: true,
    };
  }
}
