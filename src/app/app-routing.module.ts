import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccoutantModule } from './accoutant/accoutant.module';
import { AdminModule } from './admin/admin.module';
import { CafesModule } from './cafes/cafes.module';
import { CustomerModule } from './customer/customer.module';
import { DeliveryModule } from './delivery/delivery.module';

const routes: Routes = [

{
  path:'',loadChildren:() =>CustomerModule
},
{
  path: 'customer',loadChildren:()=>CustomerModule
},
{
  path:'admin',loadChildren:()=>AdminModule
},
{
  path: 'cafe',loadChildren:()=>CafesModule
},
{
  path:'account',loadChildren:()=>AccoutantModule
},
{
  path:'delivery',loadChildren:()=>DeliveryModule
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
