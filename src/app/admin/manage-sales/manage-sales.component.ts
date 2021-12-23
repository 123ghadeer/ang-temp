import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { InvocesComponent } from 'src/app/accoutant/invoces/invoces.component';
import { AdminService } from '../admin.service';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-manage-sales',
  templateUrl: './manage-sales.component.html',
  styleUrls: ['./manage-sales.component.css']
})
export class ManageSalesComponent implements OnInit {

  DateFrom:Date=new Date
  DateTo:Date=new Date
 
  constructor( private http:HttpClient,private router:Router,private toster:ToastrService , public admin:AdminService,private spiner :NgxSpinnerService,private mat:MatDialog) {
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


this.admin.getallsales(),
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
