import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CartItem } from "../../models/cart";

@Injectable({
  providedIn: "root"
})
export class CartService {

  private cartSubject$ = new BehaviorSubject<CartItem[]>([]);
  constructor() {

  }

  getCart(): CartItem[] {
    const cart = localStorage.getItem("cart");
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify([]));
      return [];
    }
    return JSON.parse(cart);
  }

  public listenCartChanges() {
    return this.cartSubject$;
  }

  initCart() {
    const cart = this.getCart();
    this.cartSubject$.next(cart);
  }

  addItemToCart(item: any, quantity: number) {
    const cart = this.getCart();
    const cartItem = cart.find(cItem => cItem.itemId === item.itemId);
    if (cartItem) {
      cartItem.quantity = quantity;
      cartItem.totalPrice = quantity * cartItem.price;
    } else {
      const newCartItem = {
        coffe: {
          name: item.coffename,
        },
        itemId: item.itemId,
        quantity: quantity,
        imageUrl: `http://localhost:43323/${item.img}`,
        name: item.itemName,
        price: item.Price,
        totalPrice: quantity * item.Price,
      }
      cart.push(newCartItem);
    }
    this.setCartRepo(cart);
  }
  removeItemFromCart(itemId: number) {
    let cart = this.getCart();
    cart = cart.filter(cart => cart.itemId === itemId);
    this.setCartRepo(cart);
  }

  private setCartRepo(cart: CartItem[]) {
    this.cartSubject$.next(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
