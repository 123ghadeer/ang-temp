import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CafeService } from '../cafe.service';
import { UserdetailsComponent } from '../userdetails/userdetails.component';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  @ViewChild('callAPIDialog') callAPIDialog!: TemplateRef<any>;
  searchText:any;


  UserId :number=0;
  UserName: string='';
  PassWord: string='';
  FirstName: string='';

  LastName: string='';

  PhonNumber: string='';
Email:string='';

  City: string='';
  Img: string='';
  CarType: string='';

 Age: number=0;
RoleId:number=0;
  spiner: any;
  toster: any;
  constructor(public dialog: MatDialog, public cafeservice :CafeService,private mat:MatDialog) { 
    //this.cafeservice.getCafeProfile(3);
this.getalldeliver(3)
  }
  ngOnInit(): void {
  }

  getalldeliver(id:number=3)
  {
    this.spiner.show();
  
  
  this.cafeservice.getdelivery(id),
    this.spiner.hide();
      this.toster.success('Data Retrived');
   
  }


opendialogedit(id:number)
{

  this.mat.open(UserdetailsComponent,{data:{id:id}})
}


}
