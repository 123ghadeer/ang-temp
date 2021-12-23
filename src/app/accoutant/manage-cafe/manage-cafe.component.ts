import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../account.service';
import { EditCustComponent } from '../edit-cust/edit-cust.component';

@Component({
  selector: 'app-manage-cafe',
  templateUrl: './manage-cafe.component.html',
  styleUrls: ['./manage-cafe.component.css']
})
export class ManageCafeComponent implements OnInit {
  searchText:any;

  constructor( private http:HttpClient,private router:Router,private toster:ToastrService , public accountservuces:AccountService,private spiner :NgxSpinnerService, private mat:MatDialog ){ }

  ngOnInit(): void {
    this.getallcafe(2)
  }




  getallcafe(id:number=2)
{
  this.spiner.show();
this.accountservuces.getcafe(id),
  this.spiner.hide();
    this.toster.success('Data Retrived');
 
}

opendialogedit(id:number)
{

  this.mat.open(EditCustComponent,{data:{id:id}})
}
}
