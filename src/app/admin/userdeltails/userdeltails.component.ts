import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-userdeltails',
  templateUrl: './userdeltails.component.html',
  styleUrls: ['./userdeltails.component.css']
})
export class UserdeltailsComponent implements OnInit {

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

 constructor(@Inject(MAT_DIALOG_DATA)public data:{id:number} , private router:Router ,public admin:AdminService) {
   this.admin.getuserById(data.id)

  console.log( this.admin.selectedItem)


 }


 
 ngOnInit(): void {
   //this.getbyid(id)

 }

 

getbyid(id:number)
{
 this.admin.getuserById(id);
}
}


