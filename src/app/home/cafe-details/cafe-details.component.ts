import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-cafe-details',
  templateUrl: './cafe-details.component.html',
  styleUrls: ['./cafe-details.component.css']
})
export class CafeDetailsComponent implements OnInit {

  constructor( private http:HttpClient,private router:Router,private toster:ToastrService , public home:HomeService,private spiner :NgxSpinnerService ){}

  ngOnInit(): void {

    console.log(this.home.selectedItem)
  }
  public createImgPath = (serverPath: string) => {
    console.log(serverPath)
    return `https://localhost:44332/${serverPath}`;
  }
}
