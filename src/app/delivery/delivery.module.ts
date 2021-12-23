import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryBodyComponent } from './delivery-body/delivery-body.component';
import { DeliveryHeaderComponent } from './delivery-header/delivery-header.component';
import { DeliverySiderbarComponent } from './delivery-siderbar/delivery-siderbar.component';
import { DeliveryFooterComponent } from './delivery-footer/delivery-footer.component';
import { MatDialog, MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { DelProfileComponent } from './del-profile/del-profile.component';
import { DelDOrdersComponent } from './del-dorders/del-dorders.component';
import { DelImgComponent } from './del-img/del-img.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DeliveryBodyComponent,
    DeliveryHeaderComponent,
    DeliverySiderbarComponent,
    DeliveryFooterComponent,
    DelProfileComponent,
    DelDOrdersComponent,
    DelDOrdersComponent,
    DelImgComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    DeliveryRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
   
    FormsModule,
  ]
})
export class DeliveryModule { }
