import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Patient} from '../model/patient';

const URL_PATIENT = `${environment.apiUrlPatient}`;

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(URL_PATIENT + '/list');
  }

  save(library): Observable<Patient> {
    return this.httpClient.post<Patient>(URL_PATIENT + '/create', library);
  }

  findById(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${URL_PATIENT}/find/${id}`);
  }

  update(id: number, patient: Patient): Observable<Patient> {
    return this.httpClient.put<Patient>(`${URL_PATIENT}/update/${id}`, patient);
  }

  delete(id: number): Observable<Patient> {
    return this.httpClient.delete<Patient>(`${URL_PATIENT}/delete/${id}`);
  }


  search(name: string): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${URL_PATIENT}/search/${name}`);
  }
}

