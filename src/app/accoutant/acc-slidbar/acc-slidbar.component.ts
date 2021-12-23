import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { EditprofileComponent } from '../editprofile/editprofile.component';

@Component({
  selector: 'app-acc-slidbar',
  templateUrl: './acc-slidbar.component.html',
  styleUrls: ['./acc-slidbar.component.css']
})
export class AccSlidbarComponent implements OnInit {
  
  constructor( private router :Router,private mat:MatDialog,public account:AccountService) {
    let adminid=localStorage.getItem('username')
    let adimrole=localStorage.getItem('role')
   }

  ngOnInit(): void {
  }


  editprofil(id:number)
  {

this.mat.open(EditprofileComponent,{data:{id:id}});

  }


  getcust()

  {
    this.router.navigate(['./account/customer']) 
   }


   logou()
{
  localStorage.clear();
  this.router.navigate(['/home/'])
}


  // navCourse()
  // {
  //   this.router.navigate(['./admin/course'])
  // }
  // navSection()
  // {
  //   this.router.navigate(['./admin/section'])
  
  // }
  // navHiring()
  // {
  //   this.router.navigate(['./admin/hiring'])
  
  // }navRR()
  // {
  //   this.router.navigate(['./admin/registrationRequest'])
  
  // }navTrainee()
  // {
  //   this.router.navigate(['./admin/trainee'])
  
  // }navTrainer()
  // {
  //   this.router.navigate(['./admin/trainer'])
  
  // }
  // navSER()
  // {
  //   this.router.navigate(['./admin/sectionEnrollRequest'])
  
  // }
  // navViewfeedback()
  // {
  //   this.router.navigate(['./admin/Viewfeedback'])
  // }
  // navLogout()
  // {
  //   this.router.navigate(['auth'])
  // }
  }


