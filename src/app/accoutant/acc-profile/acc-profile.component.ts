import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { numbers } from '@material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { AccountService } from '../account.service';
import { EditprofileComponent } from '../editprofile/editprofile.component';

@Component({
  selector: 'app-acc-profile',
  templateUrl: './acc-profile.component.html',
  styleUrls: ['./acc-profile.component.css']
})
export class AccProfileComponent implements OnInit {
  @ViewChild('callAPIDialog') callAPIDialog!: TemplateRef<any>;


  
  public response= {dbPath: ''};

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
   constructor( private http:HttpClient,private router:Router,private toster:ToastrService , public accountservuces:AccountService,public login:LoginService,private spiner :NgxSpinnerService, private mat:MatDialog ,private route:ActivatedRoute){ 
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
   this.Img = this.accountservuces.display_image;
   this.RoleId=roleId
   this.mat.open(this.callAPIDialog);
   
  
}
public uploadFinished = (event:any) => {
  this.response = event;
}
updateTrainer(data:any)
{
  console.log(data)
  data.img = this.response.dbPath;
  console.log(data.img);
  this.accountservuces.updataprofile(data);
this.router.navigate(["account/dashboord"])
}


public createImgPath = (serverPath: string) => {
  console.log(serverPath)
  return `https://localhost:44376/${serverPath}`;
}


 
}
