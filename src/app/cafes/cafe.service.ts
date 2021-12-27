 import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CafeService {
data :any[]=[];
profiledata :any[]=[];
MenuOrderFun : any =[{}];
selectedItem:any={};
funprice:any=[{}]
delevirydata :any[]=[];
display_image:any
  constructor(private http :HttpClient,private toastr :ToastrService,private spinner:NgxSpinnerService,private router:Router) { }

getMenu(){}



getMenucafe(id:number){
  this.spinner.show();
  this.http.get('https://localhost:44376/api/MenuItem/menu/'+id).subscribe((response:any)=>{
     this.data=response
    // if(data){
    //   //debugger
    //   this.selectedItem=data;
    //   this.router.navigate(['client/profile']);
    // }
    console.log(response);
    this.spinner.hide();
  },err=>{
    this.spinner.hide();
    this.toastr.error('Something went worng ,please login again');
    this.router.navigate(['']);
  }
  
  )
}



getallfunprice(id:number)
  {

    return this.http.get('https://localhost:44376/api/MenuItem/fun/'+id).subscribe((res)=>{this.funprice=res 
    console.log(this.funprice)
  })
  }

GetMenuOrderFun(){

return this.http.get('https://localhost:44376/api/MenuItem/GetMenuOrderFun').subscribe((res)=>{this.MenuOrderFun=res 
console.log(this.MenuOrderFun)
})
}


getCafeOrder(){
  this.spinner.show();

 return this.http.get('https://localhost:44376/api/MenuItem/GetCafeOrder').subscribe((result:any)=>{
       
    this.data=result
    console.log(result);
     this.toastr.success( 'getmenu works well!!!');
     this.spinner.hide();

  },err=>{
    console.log(err);
     this.toastr.error(err);
  })
  // debugger
  return this.data
}



getdelivery(roleid:number=4)
{

 return this.http.get<any>('https://localhost:44376/api/Users/GetAllUsers/'+roleid).subscribe((res:any)=>{this.delevirydata=res})

}




updateMenu(data:any)
{
  this.spinner.show();

   this.http.put('https://localhost:44376/api/MenuItem/update',data).subscribe((result)=>{
   
   this.toastr.success(' Updated successfully');
   this.spinner.hide();
    console.log(data);
  },err=>{
    console.log(err);
    console.log(data);
    this.toastr.error(err);
     })
}


deleteMenuItem(itemId:number){ 
  this.spinner.show();
    this.http.delete('https://localhost:44376/api/MenuItem/delete/'+itemId).subscribe((date:any)=>{
    
      this.toastr.success('Deleted!!')
      this.spinner.hide();
    },err =>{
      this.spinner.hide();
      this.toastr.error('Somthing wrong!!')
    })
  }

getCafeProfile(userId:number) {
  this.spinner.show();

return this.http.post ('https://localhost:44376/api/Users/GetUserById',userId).subscribe((result:any)=>{
      
   this.profiledata=result
   console.log(result);
    this.toastr.success('Getprofile works well!!!');
    this.spinner.hide();

 },err=>{
   console.log(err);
    this.toastr.error(err);
 })
 // debugger
 
}




uploadimage(form:FormData)
{

  const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
    const requestOptions = {
    headers: new HttpHeaders(headerDict),
    };
    
    this.http.post('https://localhost:44376/api/MenuItem/uploadImage',form).subscribe((data: any) => {
    this.display_image=data.image;
    console.log(this.display_image)
    
    if(data){
    console.log(this.display_image=data.Img);}
    })
}




createMenuItem(form:any){

  const headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  const requestOptions = {
    headers: new HttpHeaders(headerDict),
  };
this.spinner.show();
 this.http.post('https://localhost:44376/api/MenuItem',form,requestOptions).subscribe((result)=>{
 this.toastr.success(' Created');
 this.spinner.hide();
  
 },err=>{
  console.log(err);
  console.log(form);
  this.spinner.hide();
  this.toastr.error('Somthing want worning ');

   })
  }

  updateCafeProfile(data:any)
  {
    this.spinner.show();

    this.http.put('https://localhost:44376/api/Users/UpdateUser',data).subscribe((result)=>{
    
    this.toastr.success('Trainer Updated');
    this.spinner.hide();
     console.log(data);
   },err=>{
     console.log(err);
     console.log(data);
     this.toastr.error(err);
      })
  }   

  getuserById(id:number){
    this.spinner.show();
    this.http.get('https://localhost:44376/api/Users/GetUser/'+id).subscribe((response)=>{ this.selectedItem=response
      // if(data){
      //   //debugger
      //   this.selectedItem=data;
      //   this.router.navigate(['client/profile']);
      // }
      console.log(response);
      this.spinner.hide();
    },err=>{
      this.spinner.hide();
      this.toastr.error('Something went worng ,please login again');
      this.router.navigate(['']);
    }
    
    )
  }

}




