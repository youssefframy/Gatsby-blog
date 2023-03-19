# SOLID Principles Made Easy: A Cheat Sheet for Busy Developers

SOLID principles are a set of five design principles that were introduced by Robert C. Martin (also known as Uncle Bob) in his book "Agile Software Development, Principles, Patterns, and Practices". These principles help software developers create code that is easy to maintain, extend and modify.

However, the SOLID principles can be a bit daunting for busy developers who are trying to meet deadlines and deliver high-quality software. That's why we've created this cheat sheet to make it easier to understand and apply SOLID principles in your day-to-day work.

## S - Single Responsibility Principle (SRP)

The SRP states that a class should have only one reason to change. In other words, a class should have only one responsibility. If a class has multiple responsibilities, it becomes difficult to maintain and modify. To apply SRP, you can break down a complex class into smaller, more focused classes that each have a single responsibility.

```js
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    // add the given product to the cart with the given quantity
    this.items.push({ product, quantity });
  }

  removeItem(product) {
    // remove the given product from the cart
    this.items = this.items.filter((item) => item.product !== product);
  }

  getTotal() {
    // calculate the total cost of all items in the cart
    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
}
```

## O - Open/Closed Principle (OCP)

The OCP states that a class should be open for extension but closed for modification. This means that you should be able to add new functionality to a class without changing its existing code. To achieve this, you can use interfaces, abstract classes or inheritance to create a modular and extensible design.

```js
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    // add the given product to the cart with the given quantity
    this.items.push({ product, quantity });
  }

  removeItem(product) {
    // remove the given product from the cart
    this.items = this.items.filter((item) => item.product !== product);
  }

  getTotal() {
    // calculate the total cost of all items in the cart
    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  // OCP: add a hook method for applying discounts to the cart
  applyDiscounts() {
    // do nothing by default
  }
}

class DiscountedCart extends Cart {
  applyDiscounts() {
    // apply a 10% discount to the cart total
    const discount = this.getTotal() * 0.1;
    this.total -= discount;
  }
}
```

## L - Liskov Substitution Principle (LSP)

The LSP states that a subclass should be substitutable for its superclass without affecting the correctness of the program. This means that you should be able to use a subclass object wherever a superclass object is expected, without causing any errors or unexpected behavior. To follow LSP, you can make sure that the subclass adheres to the same interface and behavior as the superclass.

```js
class TaxedCart extends Cart {
  constructor(taxRate) {
    super();
    this.taxRate = taxRate;
  }

  getTotal() {
    // calculate the total cost of all items in the cart, including tax
    const subtotal = super.getTotal();
    const tax = subtotal * this.taxRate;
    return subtotal + tax;
  }
}

const cart = new TaxedCart(0.08); // create a new cart with an 8% tax rate
cart.addItem({ name: "Product A", price: 10 }, 2);
cart.addItem({ name: "Product B", price: 20 }, 1);
console.log(cart.getTotal()); // should print 32.4 (subtotal: 40, tax: 3.2)
```

## I - Interface Segregation Principle (ISP)

The ISP states that a client should not be forced to depend on methods it does not use. This means that you should create interfaces that are specific to the needs of the client, rather than having a large interface with methods that may not be needed by all clients. By following ISP, you can avoid unnecessary dependencies and reduce the complexity of the system.

```js
class ItemCart {
  constructor() {
    this.items = [];
  }
  
  addItem(item) {
    this.items.push(item);
  }
  
  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }
}
```

## D - Dependency Inversion Principle (DIP)

The DIP states that high-level modules should not depend on low-level modules. Instead, both should depend on abstractions. This means that you should program to an interface, rather than a concrete implementation. By doing so, you can reduce the coupling between modules and make the system more flexible and easy to modify.

```js
class CartInterface {
  constructor() {
    if (this.constructor === CartInterface) {
      throw new Error("CartInterface is an abstract class and cannot be instantiated.");
    }
  }
  
  addItem(item) {
    throw new Error("addItem method not implemented.");
  }
  
  removeItem(item) {
    throw new Error("removeItem method not implemented.");
  }
  
  getTotalPrice() {
    throw new Error("getTotalPrice method not implemented.");
  }
}

class Cart extends CartInterface {
  constructor() {
    super();
    this.items = [];
  }
  
  addItem(item) {
    this.items.push(item);
  }
  
  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }
  
  getTotalPrice() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].price;
    }
    return total;
  }
}

class PriceCalculator {
  constructor(cart) {
    this.cart = cart;
  }
  
  calculateTotalPrice() {
    return this.cart.getTotalPrice();
  }
}
```

## Conclusion

By following these five SOLID principles, you can create code that is easier to maintain, extend and modify. While it may take some time to fully understand and apply these principles, the benefits are well worth it in terms of code quality and long-term maintainability.

Remember, SOLID principles are not strict rules that must be followed at all times. Instead, they are guidelines that can help you create better code. So, take the time to understand them and apply them where appropriate, but don't be afraid to adapt them to your specific project needs.