import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafeDashboardComponent } from './cafe-dashboard/cafe-dashboard.component';
import { CafeMenuComponent } from './cafe-menu/cafe-menu.component';
import { CreateMenuItemComponent } from './create-menu-item/create-menu-item.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  {
    path:'',component:CafeDashboardComponent
  },
  {
    path:'dashboard',component:CafeDashboardComponent
  },
  {
    path:'createitem',component:CreateMenuItemComponent
  },

  {
    path:'menu',component:CafeMenuComponent
  },

  {
    path:'profile',component:ProfileComponent
  },

  {
    path:'delivery',component:DeliveryComponent
  },

  









];

@NgModule({
  imports: [RouterModule.forChild(routes)]  ,
  
  exports: [RouterModule]
})
export class CafesRoutingModule { }
