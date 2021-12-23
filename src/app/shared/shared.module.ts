import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AlertComponent } from './alert/alert.component';
import { NotFountPageComponent } from './not-fount-page/not-fount-page.component';
import { HeadercafeComponent } from './headercafe/headercafe.component';
import { FootercafeComponent } from './footercafe/footercafe.component';


@NgModule({
  declarations: [
    AlertComponent,
    NotFountPageComponent,
    HeadercafeComponent,
    FootercafeComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    AlertComponent,
    HeadercafeComponent,
    FootercafeComponent
  ]  
})
export class SharedModule { }
