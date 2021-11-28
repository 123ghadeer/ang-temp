import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ManageCafesComponent } from './manage-cafes/manage-cafes.component';
import { ManageDeliveryComponent } from './manage-delivery/manage-delivery.component';
import { ManageSalesComponent } from './manage-sales/manage-sales.component';
import { ManageProfieComponent } from './manage-profie/manage-profie.component';


@NgModule({
  declarations: [
    DashbordComponent,
    ManageCafesComponent,
    ManageDeliveryComponent,
    
    ManageSalesComponent,
    ManageProfieComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
