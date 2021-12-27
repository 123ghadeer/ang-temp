import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelDOrdersComponent } from './del-dorders/del-dorders.component';
import { DelProfileComponent } from './del-profile/del-profile.component';
import { DeliveryBodyComponent } from './delivery-body/delivery-body.component';

const routes: Routes = [
  {
    path:'',component:DeliveryBodyComponent
     
  },
  {
    path:'dashboord',component:DeliveryBodyComponent
     
  },
  {
    path:'profile',component:DelProfileComponent
  }
  ,{
    path:'Delivered',component:DelDOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule {
  
 }
