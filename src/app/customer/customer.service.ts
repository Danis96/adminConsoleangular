import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import { Customer } from './customer.model';


@Injectable({
   providedIn: 'root'
})
export class CustomerService {
       private customers: Customer[] = [];
       private customerUpdated = new Subject<Customer[]>();


       getCustomerUpdatedListener() {
           return this.customerUpdated.asObservable();
       }

       addCustomer(name: string, city: string, gender: string) {
           const customer: Customer = {
               name: name,
               city: city,
               gender: gender
           }
           this.customers.push(customer);
           this.customerUpdated.next([...this.customers]);
       }


}