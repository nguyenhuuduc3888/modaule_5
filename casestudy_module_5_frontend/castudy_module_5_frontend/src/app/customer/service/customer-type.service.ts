import {Injectable} from '@angular/core';
import {CustomerType} from '../model/customer-type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const API_URL_CUSTOMERTYPE = `${environment.apiUrlCustomer}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(API_URL_CUSTOMERTYPE + '/getAll');
  }

}
