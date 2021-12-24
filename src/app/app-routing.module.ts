import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccoutantModule } from './accoutant/accoutant.module';
import { AdminModule } from './admin/admin.module';
import { CafesModule } from './cafes/cafes.module';
import { CustomerModule } from './customer/customer.module';
import { DeliveryModule } from './delivery/delivery.module';
import { CheckAdminRuleGuard } from './guards/check-admin-rule.guard';
import { HomeModule } from './home/home.module';
import { LogindialogComponent } from './logindialog/logindialog.component';
import { RegisterdialogComponent } from './registerdialog/registerdialog.component';

const routes: Routes = [

  {
    path: '', loadChildren: () => HomeModule
  },
  {
    path: 'home', loadChildren: () => HomeModule
  },
  {
    path: 'login', loadChildren: () => LogindialogComponent
  },
  {
    path: 'register', loadChildren: () => RegisterdialogComponent
  },
  {
    path: 'customer', loadChildren: () => CustomerModule
  },
  {
    path: 'admin',
    canActivate: [CheckAdminRuleGuard],
    loadChildren: () => AdminModule
  },
  {
    path: 'cafe', loadChildren: () => CafesModule
  },
  {
    path: 'cart', loadChildren: () => import("./cart/cart.module").then(m => m.CartModule)
  },
  {
    path: 'account', loadChildren: () => import('./accoutant/accoutant-routing.module').then(m => m.AccoutantRoutingModule)
  },
  {
    path: 'delivery', loadChildren: () => DeliveryModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
