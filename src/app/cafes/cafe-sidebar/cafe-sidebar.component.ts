import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cafe-sidebar',
  templateUrl: './cafe-sidebar.component.html',
  styleUrls: ['./cafe-sidebar.component.css']
})
export class CafeSidebarComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }

  getDashboard(){
    this.router.navigate(['./cafe/dashboard']) 

  }

  getMenu(){
    this.router.navigate(['./cafe/menu']) 

  }
   getCafeOrder(){
    this.router.navigate(['./cafe/menu']) 

  }
  create()
  {
        this.router.navigate(['./cafe/createitem']) 

  }

  getdelivery(){
    this.router.navigate(['./cafe/delivery']) 

  }

  getprofile(){
    this.router.navigate(['./cafe/profile']) 

  }

  getSales(){
    this.router.navigate(['./cafe/sales']) 

  }
  logout(){

    localStorage.clear();
    this.router.navigate(["home/home"])
  }











}
