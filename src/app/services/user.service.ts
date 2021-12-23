import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  data:any[]=[];
  constructor(private http:HttpClient , private toaster:ToastrService ,private spiner:NgxSpinnerService ,private router:Router) { }


// //   createcustomer(data:any)
// //   {

// // return this.http.post<any>("https://localhost:44376/api/Users/CreateUsers",data).pipe(map((res:any)=>{return res;}))

// //   }



   getcustomer(roleid:number=5)
  {

   return this.http.get<any>('https://localhost:44376/api/Users/GetAllUsers/'+roleid).subscribe((res:any)=>{this.data=res})

  }

  getcafe(roleid:number=2)
  {

   return this.http.get<any>('https://localhost:44376/api/Users/GetAllUsers/'+roleid).subscribe((res:any)=>{this.data=res})

  }
  getdelivery(roleid:number=4)
  {

   return this.http.get<any>('https://localhost:44376/api/Users/GetAllUsers/'+roleid).subscribe((res:any)=>{this.data=res})

  }


  // Deleteuser(id:number){
  //   //from home service 
  //   debugger
  //   this.spiner.show();
  //   this.http.delete('https://localhost:44376/api/Users/DeleteUsers/'+id).subscribe((data:any)=>{
  //     this.toaster.success('Deleted');
  //     this.spiner.hide();
  //   }
  //   );    
  // }





  // updatauser(data:any,UserId:number)
  // {

  //   return this.http.put<any>("https://localhost:44376/api/Users/UpdateUser/"+UserId,data).pipe(map((res:any)=>{return res;}))

  // }

  // deleteuser(UserId:any)
  // {

  //   return this.http.delete<any>("https://localhost:44376/api/Users/DeleteUsers/"+UserId).pipe(map((res:any)=>{return res;}))

  // }




























  // getcafes(roleid=2)
  // {

  //   return this.http.get<any>("https://localhost:44376/api/Users/GetAllUsers/"+roleid).pipe(map((res:any)=>{return res;}))

  // }
  // getdelivery(roleid=4)
  // {

  //   return this.http.get<any>("https://localhost:44376/api/Users/GetAllUsers/"+roleid).pipe(map((res:any)=>{return res;}))

  // }

 




}
