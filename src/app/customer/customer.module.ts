import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerItemsComponent } from './customer-items/customer-items.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './services/customer.service';


@NgModule({
  declarations: [CustomerComponent, CustomerItemsComponent, CustomerOrderComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule
  ],
  providers: [CustomerService]
})
export class CustomerModule { }
