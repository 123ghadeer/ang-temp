import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-testmonial',
  templateUrl: './testmonial.component.html',
  styleUrls: ['./testmonial.component.css']
})
export class TestmonialComponent implements OnInit {
  @ViewChild('callConfirmDeleteDialog') callConfirmDeleteDialog!: TemplateRef<any>;
  rating =0;

  constructor(public dialog: MatDialog, private http:HttpClient,private router:Router,private toster:ToastrService , public admin:AdminService,private spiner :NgxSpinnerService,private mat:MatDialog) {}

  ngOnInit(): void {
    this.getalltestmonial()

  }



  getalltestmonial()
  {
    this.spiner.show();
  
  
  this.admin.getalltestmonial(),
    this.spiner.hide();
      this.toster.success('Data Retrived');
   
  }




  openDeleteDialog(testiMonialId:number) {
    let dialogRef =  this.dialog.open(this.callConfirmDeleteDialog);
    dialogRef.afterClosed().subscribe(result => {
      // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
      if (result !== undefined) {
          if (result === 'yes') {
            this.deletetestmonial(testiMonialId)
              // TODO: Replace the following line with your code.
              console.log('User clicked yes.');
          } else if (result === 'no') {
              // TODO: Replace the following line with your code.
              console.log('User clicked no.');
          }
      }
  })
  }


  deletetestmonial( testiMonialId:number)
  {
    console.log(testiMonialId)
this.admin.deletetestmonial(testiMonialId)
window.location.reload();



  }
}
