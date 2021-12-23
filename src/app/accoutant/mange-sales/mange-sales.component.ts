import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import html2canvas from 'html2canvas';
import { AccountService } from '../account.service';
import { MatDialog } from '@angular/material/dialog';
import { InvocesComponent } from '../invoces/invoces.component';


@Component({
  selector: 'app-mange-sales',
  templateUrl: './mange-sales.component.html',
  styleUrls: ['./mange-sales.component.css']
})
export class MangeSalesComponent implements OnInit {
  DateFrom:Date=new Date
  DateTo:Date=new Date
 
  constructor( private http:HttpClient,private router:Router,private toster:ToastrService , public accountserves:AccountService,private spiner :NgxSpinnerService,private mat:MatDialog) {
    this.getallsales();

   }

  @ViewChild('datatable1')
  htmlData: ElementRef []=[];

  ngOnInit(): void {
    //this.getallcutmoer(5);
    //this.getallsales();
  }
  
  openinvoce(id:number)
  {
  
    this.mat.open(InvocesComponent,{data:{id:id}})
  }

  
// getallcutmoer(id:number=5)
// {
//   this.spiner.show();


// this.accountserves.getcustomer(id),
//   this.spiner.hide();
//     this.toster.success('Data Retrived');
 
// }

 getallsales()
{
  this.spiner.show();


this.accountserves.getallsales(),
  this.spiner.hide();
    this.toster.success('Data Retrived');
 
}



public openPDF():void {
  let DATA :any= document.getElementById('datatable1');
    
  html2canvas(DATA).then(canvas => {
      
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;
      
      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
      
      PDF.save('angular-demo.pdf');
  });     
}

}






  

  
 
