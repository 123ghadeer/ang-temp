import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafeorder',
  templateUrl: './cafeorder.component.html',
  styleUrls: ['./cafeorder.component.css']
})
export class CafeorderComponent implements OnInit {
  @ViewChild('callConfirmDeleteDialog') callConfirmDeleteDialog!: TemplateRef<any>;

  searchText:any;

  constructor( private http:HttpClient,private router:Router,private toster:ToastrService , public cafe:CafeService,private spiner :NgxSpinnerService,private mat:MatDialog) { }
  ngOnInit(): void {
  }
  openDeleteDialog(itemId:number) {
    let dialogRef =  this.mat.open(this.callConfirmDeleteDialog);
    dialogRef.afterClosed().subscribe(result => {
      // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
      if (result !== undefined) {
          if (result === 'yes') {
            this.deleteorder(itemId)
              // TODO: Replace the following line with your code.
              console.log('User clicked yes.');
          } else if (result === 'no') {
              // TODO: Replace the following line with your code.
              console.log('User clicked no.');
          }
      }
  })
  }

  deleteorder(itemId:number)
  {  
      this.cafe.deleteMenuItem(itemId);
      window.location.reload();
  
  }

  public createImgPath = (serverPath: string) => {
    console.log(serverPath)
    return `https://localhost:44376/${serverPath}`;
  }

  

}
