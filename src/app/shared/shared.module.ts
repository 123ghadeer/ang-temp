import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AlertComponent } from './alert/alert.component';
import { NotFountPageComponent } from './not-fount-page/not-fount-page.component';


@NgModule({
  declarations: [
    AlertComponent,
    NotFountPageComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
