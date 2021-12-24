import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-dashboard',
  templateUrl: './cafe-dashboard.component.html',
  styleUrls: ['./cafe-dashboard.component.css']
})
export class CafeDashboardComponent implements OnInit {

  username: any
  constructor(private http: HttpClient, private router: Router, private toster: ToastrService, public cafe: CafeService, public login: LoginService, private spiner: NgxSpinnerService, private mat: MatDialog, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.username = params['x'];
      console.log(this.username)
      console.log(this.login.userdata)
    });
  }

  ngOnInit(): void {
    this.getallfun()
  }
  getallfun() {
    this.spiner.show();
    this.cafe.GetMenuOrderFun(),
      this.spiner.hide();
    this.toster.success('Data Retrived');

  }





}
