import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LogindialogComponent } from 'src/app/logindialog/logindialog.component';
import { RegisterdialogComponent } from 'src/app/registerdialog/registerdialog.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-headercafe',
  templateUrl: './headercafe.component.html',
  styleUrls: ['./headercafe.component.css']
})
export class HeadercafeComponent implements OnInit {
  username:any;
  constructor(private Mat:MatDialog ,private toaster:ToastrService,private router:Router , public login:LoginService,private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.username= params['x'];
      console.log(this.username)
   console.log (this.login.userdata)
  });
  
  }

  ngOnInit(): void {
    
  }
loggedin()
{
  return localStorage.getItem('token')
}

opendialog()
{

  this.Mat.open(LogindialogComponent,{data:{name:"monther",age:55664}})
  //this.dialogRef.close();

}

openRegister(){  this.Mat.open(RegisterdialogComponent,{data:{name:"monther",age:55664}})}


// let dialogRef = this.matDialog.open(MyDialogComponent);
// dialogRef.close();

}



  