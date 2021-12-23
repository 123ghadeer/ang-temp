import { Component, OnInit,ViewChild,TemplateRef } from '@angular/core';
import {MatDialog,MatDialogActions,MatDialogRef} from '@angular/material/dialog';
import { numbers } from '@material/dialog';
import { Router } from '@angular/router';
import { DeliveryServiceService } from '../delivery-service.service';

@Component({
  selector: 'app-delivery-body',
  templateUrl: './delivery-body.component.html',
  styleUrls: ['./delivery-body.component.css']
})


export class DeliveryBodyComponent implements OnInit {
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
    this.delService.getAllOrders();
    this.delService.getChoosedOrders(9);
    this.delService.getSummations()
    this.delService.getSummations2(9)

   }

  ngOnInit(): void {
  }
  getOrderItems(orderId:number){  
      this.dialog.open(this.callGetOrdersDialog);

    this.delService.getOrderItem(orderId);

  }
  confrimChooseDialog(){
    this.dialog.open(this.ConfrimChooseDialog);
  }
  chooseOrder(orderId : number){
    this.delService.createDeliveryOrder(9,orderId)
  this.delService.chooseOrder(orderId);
   window.location.reload () ;
  }
  unChooseOrder(orderId : number){
    this.delService.deleteDeliveryOrder(orderId);
    this.delService.UnChooseOrder(orderId);
     window.location.reload () ;
    }
    deliveredOrder(orderId : number){
      this.delService.deliveredOrder(orderId);
       window.location.reload () ;
      }
      unDeliveredOrder(orderId : number){
        this.delService.unDeliveredOrder(orderId);
         window.location.reload();
        }
  openInstructionDialog() {
    this.dialog.open(this.callCreateDialog);

  }
 

  closeDialog(){
  
   this.dialog.closeAll();
  
  }

}
