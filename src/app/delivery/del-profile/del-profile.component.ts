import { Component, OnInit,ViewChild,TemplateRef } from '@angular/core';
import {MatDialog,MatDialogActions,MatDialogRef} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { numbers } from '@material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from 'src/app/services/login.service';
import { DeliveryServiceService } from '../delivery-service.service';
@Component({
  selector: 'app-del-profile',
  templateUrl: './del-profile.component.html',
  styleUrls: ['./del-profile.component.css']
})
export class DelProfileComponent implements OnInit {
  @ViewChild('callAPIDialog') callAPIDialog!: TemplateRef<any>;

  user:any=null;

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
  public response= {dbPath: ''};


  @ViewChild('callCreateDialog') callCreateDialog!: TemplateRef<any>;


  constructor(private router:Router,public dialog: MatDialog,public delService:DeliveryServiceService,public login:LoginService,private spiner :NgxSpinnerService, private mat:MatDialog ,private route:ActivatedRoute) {
    this.delService.getUserInfo(9);    

    this.route.queryParams.subscribe(params => {
      this.username= params['x'];
      console.log(this.username)
   console.log (this.login.userdata)
  });
  }
   
  
  ngOnInit(): void {
  }


  public uploadFinished = (event:any) => {
    this.response = event;
  }
    

 
 populateForm(userId:number,firstName:string,age:number,city:string,email:string,phonNumber:string,userName:string,passWord:string,img:string,roleId:number,deitalsCar:string,carType:string)
 {
  

     console.log(userId)
  this.userId =userId;
  console.log( this.userId )

  this.FirstName = firstName;
  //this.LastName = lastn;
  this.PhonNumber = phonNumber;
  this.Age = age;
  this.CarType=carType;
  this.DeitalsCar=deitalsCar;
  this.City=city
  this.Email = email;
  this.UserName = this.username;
 this.PassWord = passWord;
  //this.Img = this.admin.display_image;
  this.RoleId=roleId
  this.mat.open(this.callCreateDialog);
  
 
}
updateTrainer(data:any)
{
  data.img = this.response.dbPath;
    console.log(data.img);
 console.log(data)
 this.delService.updataprofile(data);
this.router.navigate(["delivery/dasboord"])
}

public createImgPath = (serverPath: string) => {
  console.log(serverPath)
  return `https://localhost:44376/${serverPath}`;
}

}

