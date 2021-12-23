import { Component, OnInit,ViewChild,TemplateRef } from '@angular/core';
import {MatDialog,MatDialogActions,MatDialogRef} from '@angular/material/dialog';
import { numbers } from '@material/dialog';
import { Router } from '@angular/router';
import { DeliveryServiceService } from '../delivery-service.service';

@Component({
  selector: 'app-del-dorders',
  templateUrl: './del-dorders.component.html',
  styleUrls: ['./del-dorders.component.css']
})
export class DelDOrdersComponent implements OnInit {
  orderId:number=0;
  userId:number=0;
  isOrder:boolean=false;
  isDelivery:boolean=false;
  deliveryId:number=0;
  @ViewChild('callCreateDialog') callCreateDialog!: TemplateRef<any>;
  @ViewChild('callGetOrdersDialog') callGetOrdersDialog!: TemplateRef<any>;
  @ViewChild('ConfrimChooseDialog') ConfrimChooseDialog!: TemplateRef<any>;

  constructor(public dialog: MatDialog,public delService:DeliveryServiceService) {
    debugger;
    
    this.delService.getDeliveredOrders(9);

   }
   getOrderItems(orderId:number){  
    this.dialog.open(this.callGetOrdersDialog);

  this.delService.getOrderItem(orderId);

}
openInstructionDialog() {
  this.dialog.open(this.callCreateDialog);

}
  ngOnInit(): void {
  }

}
