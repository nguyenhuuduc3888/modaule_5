import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Contract} from '../model/contract';
import {HttpClient} from '@angular/common/http';

const API_URL_CONTRACT = `${environment.apiUrlContract}`;

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(API_URL_CONTRACT);
  }

  save(contract): Observable<Contract> {
    return this.httpClient.post<Contract>(API_URL_CONTRACT, contract);
  }
}
