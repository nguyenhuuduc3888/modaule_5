import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {PatientPeople} from '../model/patientPeople';

const URL_CATEGORY = `${environment.apiUrlCategory}`;

@Injectable({
  providedIn: 'root'
})
export class PeoplePatient {
  constructor(private httpClient: HttpClient) {
  }

  getAllPeoplePatient(): Observable<PatientPeople[]> {
    return this.httpClient.get<PatientPeople[]>(URL_CATEGORY);
  }

  findById(id: number): Observable<PatientPeople> {
    return this.httpClient.get<PatientPeople>(`${URL_CATEGORY}/${id}`);
  }
}
