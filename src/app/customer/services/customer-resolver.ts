import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from './customer.service';

@Injectable()
export class CustomerResolverService implements Resolve<any> {

    constructor(private customerService: CustomerService) { }

    resolve(): Observable<any> {
        return this.customerService.getCustomer();
    }
}
