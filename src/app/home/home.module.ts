import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistercafeComponent } from './registercafe/registercafe.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterDeliveryComponent } from './register-delivery/register-delivery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchmapComponent } from './searchmap/searchmap.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { UploadComponent } from './upload/upload.component';
import { DeliverUploadComponent } from './deliver-upload/deliver-upload.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CafeDetailsComponent } from './cafe-details/cafe-details.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { AllCafesComponent } from './all-cafes/all-cafes.component';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';


@NgModule({
  declarations: [
    HomepageComponent,
    RegistercafeComponent,
    ContactComponent,
    AboutComponent,
    RegisterDeliveryComponent,
    SearchmapComponent,
    UploadComponent,
    DeliverUploadComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CafeDetailsComponent,
    ItemDetailsComponent,
    AllCafesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    AgmCoreModule,
    GooglePlaceModule,
  ],
})
export class HomeModule { }
