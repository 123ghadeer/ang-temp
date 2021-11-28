import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContustUsComponent } from './system/contust-us/contust-us.component';
import { AboutUsComponent } from './system/about-us/about-us.component';
import { MenuCafeComponent } from './menu/menu-cafe/menu-cafe.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CafesModule } from './cafes/cafes.module';
import { CartModule } from './cart/cart.module';
import { CatgoryModule } from './catgory/catgory.module';
import { CustomerModule } from './customer/customer.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeliveryModule } from './delivery/delivery.module';
import { AccoutantModule } from './accoutant/accoutant.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContustUsComponent,
    AboutUsComponent,
    MenuCafeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AuthModule,
    CafesModule,
    CustomerModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DeliveryModule,
    AccoutantModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
