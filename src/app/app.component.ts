import { Component, OnInit } from '@angular/core';
import { CartService } from './cart/services/cart.service';
import { LocationService } from './services/location.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private cartService: CartService,
    private locationService: LocationService) {
    this.locationService.setCurrentLocation();
    this.cartService.initCart();
  }
  ngOnInit(): void {
  }
  title = 'ang-temp';
}
