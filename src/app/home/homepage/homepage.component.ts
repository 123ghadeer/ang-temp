import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/cart/services/cart.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  Name: string = "";
  constructor(private http: HttpClient, private router: Router, private toster: ToastrService,
    private cartService: CartService,
    public home: HomeService, private spiner: NgxSpinnerService, private mat: MatDialog) {
    this.home.getAllCafe(2);
    this.home.countcutmoer();
    this.home.countcafe();
    this.home.countemp();


  }

  ngOnInit(): void {
    this.getallcafe(2)
    this.getalltestmonial()
    this.gettop3menu()
    this.gettopmenudec()
    this.lastmenu()
    this.topCafe()
    this.cafecount()
    this.customercount(5)
    this.deliveeycount(4)
  }


  searchName(Name: string) {
    this.home.searchName(Name)//this.router.navigate(["/home/search"],{ queryParams: { x:Name}});

  }

  getalltestmonial() {
    this.spiner.show();


    this.home.getalltestmonial(),
      this.spiner.hide();
    this.toster.success('Data Retrived');

  }

  gettop3menu() {
    this.spiner.show();


    this.home.getTop3menu(),
      this.spiner.hide();
    this.toster.success('Data Retrived');

  }



  topCafe() {
    this.spiner.show();


    this.home.topCafe(),
      this.spiner.hide();
    this.toster.success('Data Retrived');

  }







  cafedetails(id: number) {

    this.home.getuserById(id);
  }




  lastmenu() {
    this.spiner.show();


    this.home.lastmenu(),
      this.spiner.hide();
    this.toster.success('Data Retrived');

  }






  customercount(id: number = 5) {
    this.home.counter(id),
      this.toster.success('Data Retrived');

  }


  deliveeycount(id: number = 4) {
    this.home.getdeliveryCount(id),
      this.toster.success('Data Retrived');

  }


  cafecount() {
    this.spiner.show();
    this.home.getcafecount(),
      this.spiner.hide();
    this.toster.success('Data Retrived');

  }



  gettopmenudec() {
    this.spiner.show();


    this.home.getTopmenudec(),
      this.spiner.hide();
    this.toster.success('Data Retrived');

  }


  getallcafe(id: number = 2) {
    this.spiner.show();
    this.home.getcafe(id),
      this.spiner.hide();
    this.toster.success('Data Retrived');

  }
  public createImgPath = (serverPath: string) => {
    console.log(serverPath)
    return `https://localhost:44332/${serverPath}`;
  }

  addToCart(item: any) {
    this.cartService.addItemToCart(item, 1)
  }

}
