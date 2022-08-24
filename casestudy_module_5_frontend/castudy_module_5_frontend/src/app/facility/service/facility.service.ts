import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL_FACILITY = `${environment.apiUrlFacility}`;

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(API_URL_FACILITY);
  }

  save(facility): Observable<Facility> {
    return this.httpClient.post<Facility>(API_URL_FACILITY, facility);
  }

  update(id: number, facility: Facility): Observable<Facility> {
    return this.httpClient.put<Facility>(`${API_URL_FACILITY}/${id}`, facility);
  }

  delete(id: number): Observable<Facility> {
    return this.httpClient.delete<Facility>(`${API_URL_FACILITY}/${id}`);
  }

  findById(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>(`${API_URL_FACILITY}/${id}`);
  }
}
