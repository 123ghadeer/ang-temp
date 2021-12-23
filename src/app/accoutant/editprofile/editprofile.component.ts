import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  imagefile:File|any=null
  selectedFile:string="";



  UserId:any;
  UserName:string="";
 PassWord:string="";
  FirstName:string=""
  LastName:string="";
  PhonNumber:string="";
  Email:string=""
 Salary:any;
 City:string=""
  Img:string=""
  CarType:string=""
 DeitalsCar:string=""
 Age:any
 
  
  
  constructor(@Inject(MAT_DIALOG_DATA)public data:{id:number} , private router:Router ,public account:AccountService) {}

  ngOnInit(): void {
  }
  updateTrainer(data:any)
  {
    console.log(data)
    this.account.updataprofile(data);
this.router.navigate(["account/dashboord"])
  }





  // processFile(file:any)
  // {
   
  //   let fileToUpload = <File>file[0];//c://fakepath/
  //   this.selectedFile=fileToUpload.name
  //   const formData = new FormData();
    
  //   formData.append('file', fileToUpload, fileToUpload.name);
  //   this.account.uploadAttachment(formData)
  //   console.log(this.selectedFile)
 
  // }

}
