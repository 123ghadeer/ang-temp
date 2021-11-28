import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatgoryRoutingModule } from './catgory-routing.module';
import { CatgoryListComponent } from './catgory-list/catgory-list.component';


@NgModule({
  declarations: [
    CatgoryListComponent
  ],
  imports: [
    CommonModule,
    CatgoryRoutingModule
  ]
})
export class CatgoryModule { }
