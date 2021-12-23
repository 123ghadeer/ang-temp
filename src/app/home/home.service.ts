import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  //data:any[]=[];
  display_image:any
  data:any={}
Result:any[]=[];


  constructor(private http:HttpClient , private toaster:ToastrService ,private spiner:NgxSpinnerService ,private router:Router) { }
 
  create(data:any)
  {//this code to convert the data to json object , use the requestOptions after the data that sent .
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    this.spiner.show();
    debugger
    this.http.post('https://localhost:44376/api/Users/CreateUsers',data,requestOptions).subscribe((res:any)=>{
    this.toaster.success('Created');
   // this.router.navigate([])login page 
    this.spiner.hide();
    },err=>{
      
      this.spiner.hide();
      this.toaster.error('Somthing want worning ');
    }
    
    )
  }



  // createdelvieryrequest(data:any)
  // {//this code to convert the data to json object , use the requestOptions after the data that sent .
  //   const headerDict = {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //   }
  //   const requestOptions = {                                                                                                                                                                                 
  //     headers: new HttpHeaders(headerDict), 
  //   };
  //   this.spiner.show();
  //   debugger
  //    this.http.post('https://localhost:44376/api/DeliveryRequest/CreateDeliveryRequest',data,requestOptions).subscribe((res:any)=>{
  //   this.toaster.success('Created');
  //  // this.router.navigate([])login page 
  //  debugger

  //   this.spiner.hide();
  //   },err=>{
      
  //     this.spiner.hide();
  //     this.toaster.error('Somthing want worning ');
  //   }
    
  //   )
  // }

  createrequest(data:any)

  {//this code to convert the data to json object , use the requestOptions after the data that sent .
    const headerDict = {
    'Content-Type': 'application/json',
     'Accept': 'application/json'
   }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
   this.spiner.show();
   debugger
   this.http.post('https://localhost:44376/api/DeliveryRequest/Create',data,requestOptions).subscribe((res:any)=>{
   this.toaster.success('Created');
   ///this.router.navigate([])//login page 
    this.spiner.hide();
    },err=>{
      
      this.spiner.hide();
      this.toaster.error('Somthing want worning ');
    }
    
    )
  }

  // createcaferequest(form:any)

  // {//this code to convert the data to json object , use the requestOptions after the data that sent .
  //   const headerDict = {
  //   'Content-Type': 'application/json',
  //    'Accept': 'application/json'
  //  }
  //   const requestOptions = {                                                                                                                                                                                 
  //     headers: new HttpHeaders(headerDict), 
  //   };
  //  this.spiner.show();
  //  debugger
  //  this.http.post('https://localhost:44376/api/CafeRequest',data,requestOptions).subscribe((res:any)=>{
  //  this.toaster.success('Created');
  //  ///this.router.navigate([])//login page 
  //   this.spiner.hide();
  //   },err=>{
      
  //     this.spiner.hide();
  //     this.toaster.error('Somthing want worning ');
  //   }
    
  //   )
  // }
  

    
  
  uploadimage(form:FormData)
  {
  
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
      const requestOptions = {
      headers: new HttpHeaders(headerDict),
      };
      
      this.http.post('https://localhost:44376/api/CafeRequest/upload',form).subscribe((data: any) => {
      this.display_image=data.img;
      console.log(this.display_image)
    console.log(data)
      
      if(data){
      console.log(this.display_image=data.img);}
      })
  }
  
    
    
    
  
 
  

    uploadAttachmentdelver(file:FormData){
    
      const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
      const requestOptions = {
      headers: new HttpHeaders(headerDict),
      };
      //debugger
      this.http.post("https://localhost:44376/api/DeliveryRequest/upload",file,requestOptions).subscribe((data: any) => {
      this.display_image=data.image;
      //debugger
      if(data){
      console.log(data);}
      }, err => {
      })
      }
    

      searchName(Name:string)
      {
      debugger;
        console.log(Name)
        const headerDict = {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          }
          const requestOptions = {
          headers: new HttpHeaders(headerDict),
          };
      
      this.http.post<any>('https://localhost:44376/api/Category/SearchCategory',{Name},requestOptions).subscribe((res:any)=>{this.Result=res 
    
    console.log(this.Result) 
    this.router.navigate(["/home/serach"],{ queryParams: { x:this.Result}})
  })
      
      console.log(this.Result)
      }
     

}
