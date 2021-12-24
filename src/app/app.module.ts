import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContustUsComponent } from './system/contust-us/contust-us.component';
import { AboutUsComponent } from './system/about-us/about-us.component';
import { MenuCafeComponent } from './menu/menu-cafe/menu-cafe.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AdminModule } from './admin/admin.module';
import { CafesModule } from './cafes/cafes.module';
import { CustomerModule } from './customer/customer.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeliveryModule } from './delivery/delivery.module';
import { AccoutantModule } from './accoutant/accoutant.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LogindialogComponent } from './logindialog/logindialog.component';
import { RegisterdialogComponent } from './registerdialog/registerdialog.component'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { environment } from 'src/environments/environment';
import { GoogleMapsModule } from '@angular/google-maps';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';





@NgModule({
  declarations: [

    AppComponent,

    ContustUsComponent,
    AboutUsComponent,
    MenuCafeComponent,
    FilterPipe,
    LogindialogComponent,
    RegisterdialogComponent,
  ],
  //entryComponents:[LogindialogComponent,RegisterdialogComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: environment.MAP_API_KEY,
      libraries: ['places', 'drawing', 'geometry']
    }),
    GooglePlaceModule,
    SocialLoginModule,
    NgxSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    CafesModule,
    CustomerModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DeliveryModule,
    AccoutantModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    GoogleMapsModule,
    Ng2SearchPipeModule,

    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyB3TtC7ztiNouZ55oFsr3HwnR-6ln11F-Y',
    //   libraries: ['places']
    // })




  ],
  exports: [

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '424618609634-s791ut3ifalgvv6q46kthkhrppq93glk.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})







// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     FooterComponent,
//     ContustUsComponent,
//     AboutUsComponent,
//     MenuCafeComponent,
//     FilterPipe,
//     RegisterdialogComponent,


//   ],
//   entryComponents:[LogindialogComponent],

//   imports: [
//     NgxSpinnerModule,
//     ToastrModule,
//     MatDialogModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatDialogModule,
//     BrowserModule,
//     AppRoutingModule,
//     AdminModule,
//     AuthModule,
//     CafesModule,
//     CustomerModule,
//     SharedModule,
//     FormsModule,
//     ReactiveFormsModule,
//     DeliveryModule,
//     AccoutantModule,
//     HttpClientModule,
//     MatButtonModule,
//     MatDialogModule,
//     BrowserAnimationsModule,



//   ],
//   exports:[


//   ],
//   providers: [],
//   schemas:[CUSTOM_ELEMENTS_SCHEMA],
//   bootstrap: [AppComponent]
// })
export class AppModule { }
