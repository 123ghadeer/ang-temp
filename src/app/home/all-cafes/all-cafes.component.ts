import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-all-cafes',
  templateUrl: './all-cafes.component.html',
  styleUrls: ['./all-cafes.component.css']
})
export class AllCafesComponent implements OnInit {

  constructor( private http:HttpClient,private router:Router,private toster:ToastrService , public home:HomeService,private spiner :NgxSpinnerService, private mat:MatDialog ){ }

  ngOnInit(): void {
    this.getallcafe(2)
  }

  getallcafe(id:number=2)
{
  this.spiner.show();
this.home.getcafe(id),
  this.spiner.hide();
    this.toster.success('Data Retrived');
 
}
public createImgPath = (serverPath: string) => {
  console.log(serverPath)
  return `https://localhost:44376/${serverPath}`;
}

}
