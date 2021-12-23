
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CafeService } from '../cafe.service';



@Component({
  selector: 'app-create-menu-item',
  templateUrl: './create-menu-item.component.html',
  styleUrls: ['./create-menu-item.component.css']
})
export class CreateMenuItemComponent implements OnInit {

  public response= {dbPath: ''};

  
  ItemName:string=''
  Components:string=''
  Price:any
  CategoryId:number=0
  Img:string=''

  createitem:FormGroup|any

    constructor(private fb:FormBuilder,public cafeservice:CafeService,public http:HttpClient,private router:Router) {

     
      
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
   this.http.post('https://localhost:44376/api/MenuItem/create',data).subscribe((result)=>{
     //this.spinner.hide();
   //this..success('Contact Us Created');
    console.log(data);
    this.router.navigate(["/cafe/dashboard"])
   },err=>{
    console.log(err);
    console.log(data);
    //this.toastr.error(err);
     })
}
}




