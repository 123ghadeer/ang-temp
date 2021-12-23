import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterDeliveryComponent } from './register-delivery/register-delivery.component';
import { RegistercafeComponent } from './registercafe/registercafe.component';
import { SearchComponent } from './search/search.component';
import { SearchmapComponent } from './searchmap/searchmap.component';

const routes: Routes = [
  {
    path:'',component:HomepageComponent
  },
  {
    path:'home',component:HomepageComponent
  },
  {
    path:'serach',component:SearchComponent
  },
  {
    path:'map',component:SearchmapComponent
  },
  {
    path:'registercafe',component:RegistercafeComponent
  },
  {
    path:'registerdeliver',component:RegisterDeliveryComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contuct',component:ContactComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
