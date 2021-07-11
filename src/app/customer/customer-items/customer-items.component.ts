import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-items',
  templateUrl: './customer-items.component.html',
  styleUrls: ['./customer-items.component.css']
})
export class CustomerItemsComponent implements OnInit {

  customers: [];
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe(_data => {
      console.log('Data: ', _data);
      
      this.customers = _data;
    }, _err => {
      console.log('Error: ', _err);
      
    });
  }



}
