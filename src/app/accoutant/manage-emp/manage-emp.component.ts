import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { AccountService } from '../account.service';
import { EditCustComponent } from '../edit-cust/edit-cust.component';

@Component({
  selector: 'app-manage-emp',
  templateUrl: './manage-emp.component.html',
  styleUrls: ['./manage-emp.component.css']
})
export class ManageEmpComponent implements OnInit {
  searchText:any;

  constructor( private http:HttpClient,private router:Router,private toster:ToastrService , public accountservic:AccountService,private spiner :NgxSpinnerService,private mat:MatDialog) { }

  ngOnInit(): void {
    this.getalldeliver(3);
  }

getalldeliver(id:number=3)
{
  this.spiner.show();


this.accountservic.getdelivery(id),
  this.spiner.hide();
    this.toster.success('Data Retrived');
 
}

opendialogedit(id:number)
{

  this.mat.open(EditCustComponent,{data:{id:id}})
}
}
