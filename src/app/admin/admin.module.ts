import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ManageCafesComponent } from './manage-cafes/manage-cafes.component';
import { ManageDeliveryComponent } from './manage-delivery/manage-delivery.component';
import { ManageSalesComponent } from './manage-sales/manage-sales.component';
import { ManageProfieComponent } from './manage-profie/manage-profie.component';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { TestmonialComponent } from './testmonial/testmonial.component';
import { DeliveryrequestComponent } from './deliveryrequest/deliveryrequest.component';
import { CaferequestComponent } from './caferequest/caferequest.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSlidbarComponent } from './admin-slidbar/admin-slidbar.component';
import { UserdeltailsComponent } from './userdeltails/userdeltails.component';
import { InvocesComponent } from './invoces/invoces.component';
import { ManageAboutusComponent } from './manage-aboutus/manage-aboutus.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UploadIMGComponent } from './upload-img/upload-img.component';



@NgModule({
  declarations: [
    DashbordComponent,
    ManageCafesComponent,
    ManageDeliveryComponent,
    
    ManageSalesComponent,
    ManageProfieComponent,
    ManageCustomerComponent,
    TestmonialComponent,
    DeliveryrequestComponent,
    CaferequestComponent,
    AdminHeaderComponent,
    AdminSlidbarComponent,
    UserdeltailsComponent,
    InvocesComponent,
    ManageAboutusComponent,
    UploadIMGComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class AdminModule { }
