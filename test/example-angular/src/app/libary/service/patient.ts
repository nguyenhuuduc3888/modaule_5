import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const URL_LIBRARY = `${environment.apiUrlPatient}`;

@Injectable({
  providedIn: 'root'
})
export class Patient {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(URL_LIBRARY);
  }

  save(library): Observable<Patient> {
    return this.httpClient.post<Patient>(URL_LIBRARY, library);
  }

  findById(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${URL_LIBRARY}/${id}`);
  }

  update(id: number, library: Patient): Observable<Patient> {
    return this.httpClient.put<Patient>(`${URL_LIBRARY}/${id}`, library);
  }

  delete(id: number): Observable<Patient> {
    return this.httpClient.delete<Patient>(`${URL_LIBRARY}/${id}`);
  }


  // search(name: string, id: number, author: string): Observable<PatientPeople[]> {
  //   return this.httpClient.get<PatientPeople[]>(`${URL_LIBRARY}?name_like=` + name + '&category.id_like=' + id + '&author_like=' + author);
  // }
}

