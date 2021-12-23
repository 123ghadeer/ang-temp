import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-slidbar',
  templateUrl: './admin-slidbar.component.html',
  styleUrls: ['./admin-slidbar.component.css']
})
export class AdminSlidbarComponent implements OnInit {

  constructor( private router :Router,private mat:MatDialog,public admin:AdminService) {
    let adminid=localStorage.getItem('username')
    let adimrole=localStorage.getItem('role')
   }

  ngOnInit(): void {
  }


  

  getcust()

  {
    this.router.navigate(['./account/customer']) 
   }


   logout()
{
  localStorage.clear();
  this.router.navigate(['/home/home'])
}

}
