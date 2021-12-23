import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageSalesComponent } from '../admin/manage-sales/manage-sales.component';
import { AccDashboordComponent } from './acc-dashboord/acc-dashboord.component';
import { AccProfileComponent } from './acc-profile/acc-profile.component';
import { EditCustComponent } from './edit-cust/edit-cust.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { InvocesComponent } from './invoces/invoces.component';
import { ManageCafeComponent } from './manage-cafe/manage-cafe.component';
import { ManageEmpComponent } from './manage-emp/manage-emp.component';
import { MangeCustomerComponent } from './mange-customer/mange-customer.component';
import { MangeSalesComponent } from './mange-sales/mange-sales.component';

const routes: Routes = [

  {
    path:'',component:AccDashboordComponent 
  },
  {
    path:'dashboord',component:AccDashboordComponent 
  },
  {
    path:"customerdetails",component:EditCustComponent
  },
  
  {
    path:"customer",component:MangeCustomerComponent
  },
  {
    path:"sales",component:MangeSalesComponent
  },
  {
    path:"delever",component:ManageEmpComponent
  },
  {
    path:"cafes",component:ManageCafeComponent
  },
  {
    path:"edit-profile",component:EditprofileComponent

  },
  {
    path:"invoces",component:InvocesComponent
  },

      {
        path:'profile',component:AccProfileComponent
       },
      // {
        
      //   path:'',redirectTo:'accoutant/acc-dashboord',pathMatch:'full'
      // },


    
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccoutantRoutingModule { }
