import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { CustomerNavigationComponent } from "./customer/customer-navigation/customer-navigation.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { NewCustomerComponent } from "./customer/new-customer/new-customer.component";


const routes: Routes = [
  {
      /// home
      path: '' , component: HomeComponent
  },
  {
      /// customers
      path: 'customers', component: CustomerNavigationComponent
  },
  {
      /// about 
      path: 'about', component: AboutComponent
  }, 
  {
    /// new customer 
    path: 'customers/newcustomer', component: NewCustomerComponent
 },
]


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}