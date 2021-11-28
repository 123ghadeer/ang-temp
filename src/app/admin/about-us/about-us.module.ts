import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { ManageAboutUsComponent } from './manage-about-us/manage-about-us.component';


@NgModule({
  declarations: [
    ManageAboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
