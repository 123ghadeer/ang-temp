import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/accoutant/account.service';
import { LoginService } from 'src/app/services/login.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  username:any
  constructor( private http:HttpClient,private router:Router,private toster:ToastrService , public admin:AdminService,public login:LoginService,private spiner :NgxSpinnerService, private mat:MatDialog ,private route:ActivatedRoute){ 
    this.route.queryParams.subscribe(params => {
      this.username= params['x'];
      console.log(this.username)
   console.log (this.login.userdata)
  });
  }

  ngOnInit(): void {
    this.getallfun()
  }
  getallfun()
{
  this.spiner.show();
this.admin.getallfuncsales(),
  this.spiner.hide();
    this.toster.success('Data Retrived');
 
}

}
