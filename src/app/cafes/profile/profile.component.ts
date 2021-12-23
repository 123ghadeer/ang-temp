import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('callAPIDialog') callAPIDialog!: TemplateRef<any>;
  @ViewChild('callCreateDialog') callCreateDialog!:TemplateRef<any>;


  selectedFile:string="";

  imagefile:File|any=null
  

  userId:number=0;
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
  DeitalsCar:string=""
  Age:number=0
  RoleId:number=0
  


   username:any
   constructor( private http:HttpClient,private router:Router,private toster:ToastrService , public cafe:CafeService,public login:LoginService,private spiner :NgxSpinnerService, private mat:MatDialog ,private route:ActivatedRoute){ 
     this.route.queryParams.subscribe(params => {
       this.username= params['x'];
       console.log(this.username)
    console.log (this.login.userdata)
   });
   }

  ngOnInit(): void {
    //this.account.getuserById(a);

  }

  populateForm(userId:number,firstName:string,age:number,city:string,email:string,phonNumber:string,userName:string,passWord:string,img:string,roleId:number)
  {
    
      console.log(userId)
   this.userId =userId;
   console.log( this.userId )

   this.FirstName = firstName;
   //this.LastName = lastn;
   this.PhonNumber = phonNumber;
   this.Age = age;
   this.City=city
   this.Email = email;
   this.UserName = this.username;
  this.PassWord = passWord;
   this.Img = this.cafe.display_image;
   this.RoleId=roleId
   this.mat.open(this.callAPIDialog);
   
  
}
updateTrainer(data:any)
{
  console.log(data)
  this.cafe.updateCafeProfile(data);
this.router.navigate(["cafe/dashboard"])
}










}
