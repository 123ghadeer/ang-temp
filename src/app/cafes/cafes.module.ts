import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafesRoutingModule } from './cafes-routing.module';
import { CafeDashboardComponent } from './cafe-dashboard/cafe-dashboard.component';
import { CafeHeaderComponent } from './cafe-header/cafe-header.component';
import { CafeFooterComponent } from './cafe-footer/cafe-footer.component';
import { CafeSidebarComponent } from './cafe-sidebar/cafe-sidebar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { CafeMenuComponent } from './cafe-menu/cafe-menu.component';
import { ProfileComponent } from './profile/profile.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { CreateMenuItemComponent } from './create-menu-item/create-menu-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ImgItemComponent } from './img-item/img-item.component';

@NgModule({
  declarations: [
    CafeDashboardComponent,
    CafeHeaderComponent,
    CafeFooterComponent,
    CafeSidebarComponent,
    CafeMenuComponent,
    ProfileComponent,
    DeliveryComponent,
    CreateMenuItemComponent,
    UserdetailsComponent,
    ImgItemComponent,
    ],
  imports: [
    CommonModule,
    CafesRoutingModule,
    MatDialogModule,
    RouterModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,



  ]
})
export class CafesModule { }
