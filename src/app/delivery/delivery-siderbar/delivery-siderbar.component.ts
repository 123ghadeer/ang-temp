import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-siderbar',
  templateUrl: './delivery-siderbar.component.html',
  styleUrls: ['./delivery-siderbar.component.css']
})
export class DeliverySiderbarComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  getProfile()

  {
    this.router.navigate(['./delivery/profile']) 
   }
   getDelDash(){
     this.router.navigate(['./delivery/'])
   }

getDelOrders(){
     this.router.navigate(['./delivery/Delivered'])
   }
}
