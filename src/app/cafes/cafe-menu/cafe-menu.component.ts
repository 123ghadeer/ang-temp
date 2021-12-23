import { Component, OnInit, TemplateRef, ViewChild  } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-menu',
  templateUrl: './cafe-menu.component.html',
  styleUrls: ['./cafe-menu.component.css']
})


export class CafeMenuComponent implements OnInit {

  @ViewChild('callAPIDialog') callAPIDialog!: TemplateRef<any>;
  @ViewChild('callConfirmDeleteDialog') callConfirmDeleteDialog!: TemplateRef<any>;

  public response= {dbPath: ''};

  searchText:any;

  ItemId: number=0;
  ItemName: string='';
  Components: string='';
  Price: any;
  Img: string='';
  CategoryId: number=0;
 
  constructor(public dialog: MatDialog, public cafeservice :CafeService) { 
    this.cafeservice.getMenu();

  }
  

  ngOnInit(): void {
  }
  openDeleteDialog(itemId:number) {
    let dialogRef =  this.dialog.open(this.callConfirmDeleteDialog);
    dialogRef.afterClosed().subscribe(result => {
      // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
      if (result !== undefined) {
          if (result === 'yes') {
            this.deleteMenuItem(itemId)
              // TODO: Replace the following line with your code.
              console.log('User clicked yes.');
          } else if (result === 'no') {
              // TODO: Replace the following line with your code.
              console.log('User clicked no.');
          }
      }
  })
  }
  public uploadFinished = (event:any) => {
    this.response = event;
  }

  populateForm(itemId:number,itemName:string,components:string,price:any, img:string,categoryId:number)  
    {
      console.log(itemId)
   this.ItemId =itemId;
   console.log( this.ItemId )

   this.ItemName = itemName;
   this.Components = components;
   this.Price= price;
   this.Img = img;
   this.CategoryId = categoryId;
   
   this.dialog.open(this.callAPIDialog);
  }
  
  updateMenu(data:any)
  {
    data.img = this.response.dbPath;
    console.log(data.img);
    console.log(data)
    this.cafeservice.updateMenu(data);
    window.location.reload();

  }

  deleteMenuItem(itemId:number)
  {  
      this.cafeservice.deleteMenuItem(itemId);
      window.location.reload();
  
  }

  public createImgPath = (serverPath: string) => {
    console.log(serverPath)
    return `https://localhost:44376/${serverPath}`;
  }


}
