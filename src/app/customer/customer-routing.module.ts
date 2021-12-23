import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../system/about-us/about-us.component';
import { ContustUsComponent } from '../system/contust-us/contust-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'aboutUs',component:AboutUsComponent
  },
  {
  path:'ContuctUs',component: ContustUsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
