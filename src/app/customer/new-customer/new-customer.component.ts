import { Component, OnInit } from '@angular/core';
import { NgForm, Form } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent {

  name = '';
  city = '';
  gender = '';

  constructor(public customerService: CustomerService) { }



  onSaveCustomer(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.customerService.addCustomer(form.value.name, form.value.city, form.controls['gender'].value);
    console.log('Forma: ' + form.value.name);
  }

}
