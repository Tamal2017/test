import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-items',
  templateUrl: './customer-items.component.html',
  styleUrls: ['./customer-items.component.css']
})
export class CustomerItemsComponent implements OnInit {

  customers: [];
  constructor( private customerRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.customerRoute.data.subscribe(_data => {
      this.customers = _data.list;
    }, _err => {
      console.log('Error: ', _err);
    });
  }



}
