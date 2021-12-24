import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiBaseUrl = environment.API_URL;
  token: string | any

  userdata: any = [{}]

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  constructor(private http: HttpClient, private toaster: ToastrService, private router: Router, private spinner: NgxSpinnerService) {



  }



  create(data: any) {//this code to convert the data to json object , use the requestOptions after the data that sent .
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    this.spinner.show();

    //debugger
    this.http.post(`${this.apiBaseUrl}/api/JWT/login`, data, requestOptions).subscribe((res: any) => {
      this.toaster.success('Created');
      this.spinner.hide();

    }, err => {

      this.toaster.error('Somthing want worning ');
      this.spinner.hide();

    }

    )
  }



  login() {

    var body = {
      username: this.username.value,
      password: this.password.value
    }
    console.log(body);

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    //this.spinner.show();

    var respose1 = '';
    this.http.post(`${this.apiBaseUrl}/api/JWT/login`, body, requestOptions).subscribe((res: any) => {
      console.log(res);
      //this.spinner.hide();

      respose1 = res as string;

      console.log('respose1 : ' + respose1);
      const responce = {
        token: respose1.toString(),
      };
      localStorage.setItem("token", responce.token)
      console.log(responce);

      localStorage.setItem('token', responce.token);
      //decode the token to extract the role name from the token
      const data: any = jwtDecode(responce.token);
      //save the decod on the local storge . but you must conver this data to string value using Json.stringify
      localStorage.setItem('user', JSON.stringify(data));

      var retrievedata: any = localStorage.getItem('user'); //retrieve the object


      var username: any = data.unique_name

      console.log(retrievedata)
      console.log(username)

      //localStorage.setItem('username',this.data.unique_name);

      //var username=data.username;

      //var x= localStorage.setItem("username")
      //var y=localStorage.setItem("userId",this.responce.userId)






      if (data.role == "admin") {
        //localStorage.setItem('username',this.token.unique_name)
        //localStorage.setItem('role',this.token.role)
        this.http.get(`${this.apiBaseUrl}/api/Users/GetUserbyUserName/${username}`).subscribe((response) => {
          this.userdata = response
          this.router.navigate(['admin/dashbord']);
        })

      }


      else if (data.role == "customer") {
        //localStorage.setItem('username',this.token.unique_name)
        //localStorage.setItem('role',this.token.role)
        this.router.navigate(['home/homepage'], { queryParams: { x: username } })
        //this.router.navigate(['---'],{ queryParams: { x: y} })
      }
      else if (data.role == "account") {

        this.http.get(`${this.apiBaseUrl}/api/Users/GetUserbyUserName/${username}`).subscribe((response) => {
          this.userdata = response

          console.log(this.userdata)
          this.router.navigate(['account/dashboord'], { queryParams: { x: username } });

        })
      }
      else if (data.role == "cafe") {
        this.http.get(`${this.apiBaseUrl}/api/Users/GetUserbyUserName/${username}`).subscribe((response) => {
          this.userdata = response

          console.log(this.userdata)
          this.router.navigate(['cafe/dashboord'], { queryParams: { x: username } });
        })
      }
      else if (data.role == "delivery") {
        this.http.get(`${this.apiBaseUrl}/api/Users/GetUserbyUserName/${username}`).subscribe((response) => {
          this.userdata = response

          console.log(this.userdata)
          this.router.navigate(['delivery/dashboord'], { queryParams: { x: username } });
        })
      }


      else {
        alert("User does not exist")
      }

    }
    )


  }


  reguster() {

  }
}


