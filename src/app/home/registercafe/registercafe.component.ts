import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-registercafe',
  templateUrl: './registercafe.component.html',
  styleUrls: ['./registercafe.component.css']
})
export class RegistercafeComponent implements OnInit {

  public response= {dbPath: ''};



  formRegister:FormGroup=new FormGroup({
    userName:new FormControl('',[Validators.required]),
    phoneNumber: new FormControl(''),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    img:new FormControl(''),
    cafeName:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    Longitude:new FormControl('',[Validators.required]),

    Latitude:new FormControl('',[Validators.required]),



   //roleId:new FormControl('')

  
  }
  )




  constructor(public fb:FormBuilder,public home:HomeService,private router:Router,public http:HttpClient )  {


  }
  ngOnInit(): void {



    
  }


  public uploadFinished = (event:any) => {
    this.response = event;
  }

  

  submit(data:any)
  {
    data.img = this.response.dbPath;
    console.log(data.img);
    //this..show();
     this.http.post('https://localhost:44376/api/CafeRequest',data).subscribe((result)=>{
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
