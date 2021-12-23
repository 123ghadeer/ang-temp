import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../account.service';
const pdfMakeX = require('pdfmake/build/pdfmake.js');
const pdfFontsX = require('pdfmake-unicode/dist/pdfmake-unicode.js');
pdfMakeX.vfs = pdfFontsX.pdfMake.vfs;
import * as pdfMake from 'pdfmake/build/pdfmake';
var htmlToPdfmake = require("html-to-pdfmake");




@Component({
  selector: 'app-invoces',
  templateUrl: './invoces.component.html',
  styleUrls: ['./invoces.component.css']
})
export class InvocesComponent implements OnInit {


  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  
  
  
  //@ViewChild('myElement', { read: ElementRef }) myElement: ElementRef | undefined;

  
  constructor(@Inject(MAT_DIALOG_DATA)public data:{id:number} , private router:Router ,public account:AccountService) {
    this.account.getsalesbyid(data.id)

   console.log( this.account.selectsales)


  }



  ngOnInit(): void {
    //this.pdfTable=[];


  }
  //PDF genrate button click function
  public downloadAsPDF() {
    const doc = new jsPDF();
    //get table html
    const pdfTable = this.pdfTable.nativeElement;

    //html to pdf format
    var html = htmlToPdfmake(pdfTable.innerHTML);
   
    const documentDefinition = { content: html };

    pdfMake.createPdf(documentDefinition).open();

    

  
  }

}
