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
  display_image: any
  data: any = {}
  Result: any[] = [];
  customer: any = {};
  cafe: any = [{}];
  cafedata: any[] = [];
  delivery: any = {};
  testmonial: any[] = [];
  top3menu: any[] = [];
  menudec: any[] = [];
  lastmen: any[] = [];
  topCafes: any[] = [];
  selectedItem: any = {};
  cafeArray: any[] = [];

  constructor(private http: HttpClient, private toaster: ToastrService, private spiner: NgxSpinnerService, private router: Router) { }

  create(data: any) {//this code to convert the data to json object , use the requestOptions after the data that sent .
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    this.spiner.show();
    // debugger
    this.http.post('https://localhost:44332/api/Users/CreateUsers', data, requestOptions).subscribe((res: any) => {
      this.toaster.success('Created');
      // this.router.navigate([])login page
      this.spiner.hide();
    }, err => {

      this.spiner.hide();
      this.toaster.error('Somthing want worning ');
    }

    )
  }
  countcutmoer() {
    this.http.get('https://localhost:44376/api/Users/countcutmoer').subscribe((result: any) => {

      this.customer = result;
      console.log(result);
    }, err => {
      console.log(err);
    })
  }
  countemp() {
    this.http.get('https://localhost:44376/api/Users/countemp').subscribe((result: any) => {

      console.log(result);
    }, err => {
      console.log(err);
    })
  }
  countcafe() {
    this.http.get('https://localhost:44376/api/Users/countcafe').subscribe((result: any) => {

      this.cafe = result;
      console.log(result);
    }, err => {
      console.log(err);
    })
  }
  getAllCafe(id: number) {

    this.http.post('https://localhost:44376/api/Users/GetAllUsers', id).subscribe((result: any) => {
      this.cafeArray = result;
      console.log(result);
    }, err => {
      console.log(err);
    })
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

  createrequest(data: any) {//this code to convert the data to json object , use the requestOptions after the data that sent .
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    this.spiner.show();
    // debugger
    this.http.post('https://localhost:44332/api/DeliveryRequest/Create', data, requestOptions).subscribe((res: any) => {
      this.toaster.success('Created');
      ///this.router.navigate([])//login page
      this.spiner.hide();
    }, err => {

      this.spiner.hide();
      this.toaster.error('Somthing want worning ');
    }

    )
  }















  searchName(Name: string) {
    // debugger;
    console.log(Name)
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    this.http.post<any>('https://localhost:44332/api/Category/SearchCategory', { Name }, requestOptions).subscribe((res: any) => {
      this.Result = res

      console.log(this.Result)
      this.router.navigate(["/home/serach"], { queryParams: { x: this.Result } })
    })

    console.log(this.Result)
  }




  counter(id: number = 5) {
    return this.http.get('https://localhost:44332/api/Users/counter/' + id).subscribe((res: any) => {
      this.customer = res
      console.log(this.customer)

    })


  }



  getTop3menu() {
    return this.http.get<any>('https://localhost:44332/api/MenuItem/allmenu').subscribe((res: any) => {
      this.top3menu = res

      console.log(this.top3menu)
    })




  }


  getTopmenudec() {
    return this.http.get<any>('https://localhost:44332/api/MenuItem/allmenudec').subscribe((res: any) => {
      this.menudec = res

      console.log(this.menudec)
    })




  }


  lastmenu() {
    return this.http.get<any>('https://localhost:44332/api/MenuItem/lastmenu').subscribe((res: any) => {
      this.lastmen = res

      console.log(this.lastmen)
    })




  }


  getcafecount() {

    return this.http.get('https://localhost:44332/api/Users/countcafe').subscribe((res) => {
      this.cafe = res
      console.log(this.cafe)
    })


  }



  getalltestmonial() {
    return this.http.get<any>('https://localhost:44332/api/TestiMonial/GetAllTestMonial').subscribe((res: any) => {
      this.testmonial = res

      console.log(this.testmonial)
    })

  }




  topCafe() {
    return this.http.get<any>('https://localhost:44332/api/Users/topCafe').subscribe((res: any) => {
      this.topCafes = res

      console.log(this.topCafes)
    })

  }



  getcafe(roleid: number = 2) {

    return this.http.get<any>('https://localhost:44332/api/Users/GetAllUsers/' + roleid).subscribe((res: any) => { this.cafedata = res })

  }

  getdeliveryCount(id: number = 4) {
    // debugger
    return this.http.get('https://localhost:44332/api/Users/counter/' + id).subscribe((res: any) => {
      this.delivery = res
      console.log(this.delivery)
    })


  }




  getuserById(id: number) {
    this.spiner.show();
    this.http.get('https://localhost:44332/api/Users/GetUser/' + id).subscribe((response) => {
      this.selectedItem = response
      // if(data){
      //   //debugger
      //   this.selectedItem=data;
      //   this.router.navigate(['client/profile']);
      // }
      console.log(response);
      this.spiner.hide();
      this.router.navigate(['home/cafesdetails']);
    }, err => {
      this.spiner.hide();
      this.toaster.error('Something went worng ,please login again');
    }

    )
  }




}
