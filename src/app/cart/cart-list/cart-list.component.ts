import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})

export class CartListComponent implements OnInit {
  checkoutDate= new Date()
  cart!: CartItem[];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.cartService.listenCartChanges().subscribe((updatedCart) => {
      this.cart = updatedCart;
    })
  }

  checkout() {
    if (!localStorage.getItem("token")) {
      // show login dialog
      return;
    }
    const orderData = this.cartService.checkout();
    const user = JSON.parse(localStorage.getItem("user") as string);
    this.cartService.createOrder(orderData, user).subscribe(() =>{
      // show success dialog

    })
  }

}
