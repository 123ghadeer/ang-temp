import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  Name:string="";
  constructor( private http:HttpClient,private router:Router,private toster:ToastrService , public home:HomeService,private spiner :NgxSpinnerService,private mat:MatDialog) 
  {
    this.home.getAllCafe(2);
    this.home.countcutmoer();
    this.home.countcafe();
    this.home.countemp();


  }

  ngOnInit(): void {
  }


  searchName(Name:string)
  {
this.home.searchName(Name)//this.router.navigate(["/home/search"],{ queryParams: { x:Name}});

  }
 
}
