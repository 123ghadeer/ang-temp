import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-deliveryrequest',
  templateUrl: './deliveryrequest.component.html',
  styleUrls: ['./deliveryrequest.component.css']
})
export class DeliveryrequestComponent implements OnInit {
  @ViewChild('callConfirmDeleteDialog') callConfirmDeleteDialog!: TemplateRef<any>;
  @ViewChild('callAPIDialog') callAPIDialog!: TemplateRef<any>;

  constructor(public dialog: MatDialog, private http:HttpClient,private router:Router,private toster:ToastrService , public admin:AdminService,private spiner :NgxSpinnerService,private mat:MatDialog) {
    this.getallrequest();

   }
  ngOnInit(): void {
  }


  getallrequest()
  {
    this.spiner.show();
  
  
  this.admin.getalldeliveryrequest(),
    this.spiner.hide();
      this.toster.success('Data Retrived');
   
  }


  openDeleteDialog(deliveryRequestId:number) {
    let dialogRef =  this.dialog.open(this.callConfirmDeleteDialog);
    dialogRef.afterClosed().subscribe(result => {
      // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
      if (result !== undefined) {
          if (result === 'yes') {
            this.deletedeliver(deliveryRequestId)
              // TODO: Replace the following line with your code.
              console.log('User clicked yes.');
          } else if (result === 'no') {
              // TODO: Replace the following line with your code.
              console.log('User clicked no.');
          }
      }
  })
  }


  openconfarimDialog(id:number) {
    let dialogRef =  this.dialog.open(this.callAPIDialog);
    dialogRef.afterClosed().subscribe(result => {
      // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
      if (result !== undefined) {
          if (result === 'yes') {
            this.deliverreq(id)
              // TODO: Replace the following line with your code.
              console.log('User clicked yes.');
          } else if (result === 'no') {
              // TODO: Replace the following line with your code.
              console.log('User clicked no.');
          }
      }
  })
  }


  deletedeliver( deliveryRequestId:number)
  {
    console.log(deliveryRequestId)
this.admin.deletedeliverrequest(deliveryRequestId)
window.location.reload();



  }

  deliverreq(deliveryRequestId:number){

    this.admin.accepetdeliverRequest(deliveryRequestId)
    this.admin.deletedeliverrequest(deliveryRequestId)
    window.location.reload();


  }
  public createImgPath = (serverPath: string) => {
    console.log(serverPath)
    return `https://localhost:44376/${serverPath}`;
  }

}
