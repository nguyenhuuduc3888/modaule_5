import {Injectable} from '@angular/core';
import {Category} from '../model/category';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.apiUrlCategory}`;

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  getAllCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(API_URL);
  }

  saveCategory(category): Observable<Category> {
    return this.httpClient.post<Category>(API_URL, category);
  }

  finByIdCategory(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`${API_URL}/${id}`);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.httpClient.put<Category>(`${API_URL}/${id}`, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.httpClient.delete<Category>(`${API_URL}/${id}`);
  }
}
