import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccoutantRoutingModule } from './accoutant-routing.module';
import { AccHeaderComponent } from './acc-header/acc-header.component';
import { AccDashboordComponent } from './acc-dashboord/acc-dashboord.component';
import { AccProfileComponent } from './acc-profile/acc-profile.component';
import { RouterModule } from '@angular/router';
import { AccSlidbarComponent } from './acc-slidbar/acc-slidbar.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MangeCustomerComponent } from './mange-customer/mange-customer.component';
import { MangeSalesComponent } from './mange-sales/mange-sales.component';
import { ManageEmpComponent } from './manage-emp/manage-emp.component';
import { EditCustComponent } from './edit-cust/edit-cust.component';
import { ManageCafeComponent } from './manage-cafe/manage-cafe.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { InvocesComponent } from './invoces/invoces.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UploadIMGComponent } from './upload-img/upload-img.component';



@NgModule({
  declarations: [
    AccHeaderComponent,
    AccDashboordComponent,
    AccProfileComponent,
    AccSlidbarComponent,
    MangeCustomerComponent,
    MangeSalesComponent,
    ManageEmpComponent,
    EditCustComponent,
    ManageCafeComponent,
    EditprofileComponent,
    InvocesComponent,
    UploadIMGComponent,
  ],
  imports: [
    CommonModule,
    AccoutantRoutingModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  exports:[
AccHeaderComponent

  ]
})
export class AccoutantModule { }
