import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public fb:FormBuilder,public home:HomeService,private router:Router,public http:HttpClient)  {}

  ngOnInit(): void {
  }



  submit(data:any)
  {
    
    //this..show();
     this.http.post('https://localhost:44376/api/TestiMonial/CreateTestMonial',data).subscribe((result)=>{
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
