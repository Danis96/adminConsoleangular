import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { CustomerNavigationComponent } from "./customer-navigation/customer-navigation.component";


const routes: Routes = [
  {
      /// home
      path: '' , component: CustomerNavigationComponent
  },
  {
      /// customers
      path: '/customers', component: CustomerNavigationComponent
  },
  {
      /// about 
      path: '/about', component: CustomerNavigationComponent
  }, 
  {
    /// new customer 
    path: '/customers/newcustomer', component: CustomerNavigationComponent
 },
 {
    /// card view  
    path: '/customer/cardview', component: CustomerNavigationComponent
},
{
    /// list view 
    path: '/customer/listview', component: CustomerNavigationComponent
}
]


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRouting {}