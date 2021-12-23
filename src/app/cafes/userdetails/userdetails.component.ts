import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  UserId:number=0;
  UserName:string="";
 PassWord:string="";
  FirstName:string=""
  LastName:string="";
  PhonNumber:string="";
  Email:string="";
 Salary:number=0;
 City:string="";
  Img:string=""
  CarType:string=""
 DeitalsCar:string|undefined
 Age:number|undefined
  RoleId:number|undefined
  LocationId:number|undefined
  SystemId:number|undefined

 constructor(@Inject(MAT_DIALOG_DATA)public data:{id:number} , private router:Router ,public cafe:CafeService) {
   this.cafe.getuserById(data.id)

  console.log( this.cafe.selectedItem)


 }


 
 ngOnInit(): void {
   //this.getbyid(id)

 }

 

getbyid(id:number)
{
 this.cafe.getuserById(id);
}

}
