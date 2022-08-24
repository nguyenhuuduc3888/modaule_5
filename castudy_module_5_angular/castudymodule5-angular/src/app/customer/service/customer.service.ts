import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

const API_URL_CUSTOMER = `${environment.apiUrlCustomer}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(API_URL_CUSTOMER);
  }

  // @ts-ignore
  save(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(API_URL_CUSTOMER, customer);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${API_URL_CUSTOMER}/${id}`);
  }

  update(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(`${API_URL_CUSTOMER}/${id}`, customer);
  }

  delete(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${API_URL_CUSTOMER}/${id}`);
  }

  findAll(nameSearch: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${API_URL_CUSTOMER}?name_like=` + nameSearch );
  }
}
