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
    SearchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyB3TtC7ztiNouZ55oFsr3HwnR-6ln11F-Y',
    //   libraries: ['places']
    // })


    
    

  ],
})
export class HomeModule { }
