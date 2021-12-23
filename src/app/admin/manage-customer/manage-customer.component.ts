import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { UserdeltailsComponent } from '../userdeltails/userdeltails.component';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css']
})
export class ManageCustomerComponent implements OnInit {
  searchText:any;
  @ViewChild('datatable1')
  htmlData: ElementRef []=[];
  constructor( private http:HttpClient,private router:Router,private toster:ToastrService , public admin:AdminService,private spiner :NgxSpinnerService, private mat:MatDialog ){ }

  ngOnInit(): void {
    this.getallcutmoer(5);
  }

getallcutmoer(id:number=5)
{
  this.spiner.show();
this.admin.getcustomer(id),
  this.spiner.hide();
    this.toster.success('Data Retrived');
 
}

deletecustomer(id:number)
{

  this.spiner.show();
alert("are you sure?")

this.admin.Deleteuser(id),
  this.spiner.hide();
    this.toster.success('Data Retrived');
    window.location.reload()

}


opendialogedit(id:number)
{

  this.mat.open(UserdeltailsComponent,{data:{id:id}})
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

// openRegister(){  this.Mat.open(RegisterdialogComponent,{data:{name:"monther",age:55664}})}





// getallfarmers(){
//   this.spiner.show();
//   this.userService.getallfarmers().subscribe((res:any)=>{
//     this.userService.data=res;
//     this.spiner.hide();
//     this.toast.success('Data Retrived');

//   },err=>{
//     this.spiner.hide();
//     this.toast.error('something want worring');
//   }
//   )

// }



}
