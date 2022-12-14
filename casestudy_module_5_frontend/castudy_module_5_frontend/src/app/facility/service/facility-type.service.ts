import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FacilityType} from '../model/facility-type';

const API_URL_FACILITYTYPE = `${environment.apiUrlFacility}`;

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<FacilityType[]> {
    return this.httpClient.get<FacilityType[]>(API_URL_FACILITYTYPE);
  }

  findById(id: number): Observable<FacilityType> {
    return this.httpClient.get<FacilityType>(`${API_URL_FACILITYTYPE}/${id}`);
  }

}
