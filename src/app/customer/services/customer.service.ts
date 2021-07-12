import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public getCustomer(): Observable<any> {
    const data = 'assets/mock/customer-data.json';
    return this.http.get(data);

  }

}
