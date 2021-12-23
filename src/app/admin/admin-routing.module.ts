import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaferequestComponent } from './caferequest/caferequest.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DeliveryrequestComponent } from './deliveryrequest/deliveryrequest.component';
import { InvocesComponent } from './invoces/invoces.component';
import { ManageCafesComponent } from './manage-cafes/manage-cafes.component';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { ManageDeliveryComponent } from './manage-delivery/manage-delivery.component';
import { ManageProfieComponent } from './manage-profie/manage-profie.component';
import { ManageSalesComponent } from './manage-sales/manage-sales.component';
import { TestmonialComponent } from './testmonial/testmonial.component';

const routes: Routes = [
  {
    path:'',component:DashbordComponent
  },
  {
    path:'dashbord',component:DashbordComponent
  },
  {
    path:'CafaQ',component:CaferequestComponent
  },
  {
    path:'deliveryQ',component:DeliveryrequestComponent
  },
  {
    path:'invoces',component:InvocesComponent
  },
  {
    path:'cafe',component:ManageCafesComponent
  },
  {
    path:'customer',component:ManageCustomerComponent
  },
  {
    path:'delivery',component:ManageDeliveryComponent
  },
  {
    path:'profile',component:ManageProfieComponent
  },
  {
    path:'sales',component:ManageSalesComponent
  },
  {
    path:'test',component:TestmonialComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
