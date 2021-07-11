import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerItemsComponent } from './customer-items/customer-items.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';

import { CustomerComponent } from './customer.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'items', component: CustomerItemsComponent },
  { path: 'order', component: CustomerOrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
