import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-edit-cust',
  templateUrl: './edit-cust.component.html',
  styleUrls: ['./edit-cust.component.css']
})
export class EditCustComponent implements OnInit {

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

  constructor(@Inject(MAT_DIALOG_DATA)public data:{id:number} , private router:Router ,public account:AccountService) {
    this.account.getuserById(data.id)

   console.log( this.account.selectedItem)


  }


  
  ngOnInit(): void {
    //this.getbyid(id)

  }

  

getbyid(id:number)
{
  this.account.getuserById(id);
}
}
