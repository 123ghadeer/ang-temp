import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-logindialog',
  templateUrl: './logindialog.component.html',
  styleUrls: ['./logindialog.component.css']
})
export class LogindialogComponent implements OnInit {
  

  constructor(@Inject(MAT_DIALOG_DATA)public data:{ name:string,age:number} , public dialogRef: MatDialogRef<LogindialogComponent>,private router:Router,private spinner: NgxSpinnerService,public login:LoginService, private socialAuthService: SocialAuthService
  ) {}


  
 
  

  ngOnInit(): void {

  }



  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    
  }













  submit(){
   this.login.login();
  }

  
}
