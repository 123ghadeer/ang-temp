import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { UserdeltailsComponent } from '../userdeltails/userdeltails.component';

@Component({
  selector: 'app-manage-delivery',
  templateUrl: './manage-delivery.component.html',
  styleUrls: ['./manage-delivery.component.css']
})
export class ManageDeliveryComponent implements OnInit {
  searchText:any;
  @ViewChild('callConfirmDeleteDialog') callConfirmDeleteDialog!: TemplateRef<any>;


  constructor( private http:HttpClient,private router:Router,private toster:ToastrService , public admin:AdminService,private spiner :NgxSpinnerService,private mat:MatDialog) { }

  ngOnInit(): void {
    this.getalldeliver(4);
  }

getalldeliver(id:number=4)
{
  this.spiner.show();


this.admin.getdelivery(id),
  this.spiner.hide();
    this.toster.success('Data Retrived');
 
}

public createImgPath = (serverPath: string) => {
  console.log(serverPath)
  return `https://localhost:44376/${serverPath}`;
}


opendialogedit(id:number)
{

  this.mat.open(UserdeltailsComponent,{data:{id:id}})
}



openDeleteDialog(userId:number) {
  let dialogRef =  this.mat.open(this.callConfirmDeleteDialog);
  dialogRef.afterClosed().subscribe(result => {
    // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
    if (result !== undefined) {
        if (result === 'yes') {
          this.deleteuser(userId)
            // TODO: Replace the following line with your code.
            console.log('User clicked yes.');
        } else if (result === 'no') {
            // TODO: Replace the following line with your code.
            console.log('User clicked no.');
        }
    }
})
}







deleteuser( userId:number)
  {
    console.log(userId)
this.admin.deleteuser(userId)
window.location.reload();



  }




}
