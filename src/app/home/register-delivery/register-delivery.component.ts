import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-register-delivery',
  templateUrl: './register-delivery.component.html',
  styleUrls: ['./register-delivery.component.css']
})
export class RegisterDeliveryComponent implements OnInit {

  public response= {dbPath: ''};

  
  selectedFile:string="";

imagefile:File|any=null
nameIamge: string = '';

  formRegister:FormGroup=new FormGroup({
    deliveryName:new FormControl('',[Validators.required]),
    phoneNumber: new FormControl(''),
    city:new FormControl('',[Validators.required,Validators.email]),
    img:new FormControl(''),
    carType:new FormControl('',[Validators.required]),
    username:new FormControl('',[Validators.required,Validators.minLength(8)]),

    password:new FormControl('',[Validators.required,Validators.minLength(8)]),

    email:new FormControl('',[Validators.required]),
    deitaliesCar:new FormControl('',[Validators.required]),
    age:new FormControl('',[Validators.required]),


    
   //roleId:new FormControl('')

  
  }
  )




  constructor(public fb:FormBuilder,public home:HomeService,private router:Router,public http:HttpClient)  {


  }
  ngOnInit(): void {
//     this.registerform=new FormGroup({
// username:new FormControl(null,Validators.required),
// password:new FormControl(null,Validators.required),
// email:new FormControl(null,Validators.required),
// firstname:new FormControl(null,Validators.required),



    
  }

  public uploadFinished = (event:any) => {
    this.response = event;
  }

  submit(data:any)
  {
    data.img = this.response.dbPath;
    console.log(data.img);
    //this..show();
     this.http.post('https://localhost:44376/api/DeliveryRequest/Create',data).subscribe((result)=>{
       //this.spinner.hide();
     //this..success('Contact Us Created');
      console.log(data);
      this.router.navigate(["/home/home"])
     },err=>{
      console.log(err);
      console.log(data);
      //this.toastr.error(err);
       })
  }

    
}
