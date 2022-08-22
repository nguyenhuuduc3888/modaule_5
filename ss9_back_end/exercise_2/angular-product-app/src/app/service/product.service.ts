import {Injectable, PLATFORM_ID} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const API_URL_PRODUCT = `${environment.apiUrlProduct}`;

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL_PRODUCT);
  }

  saveProduct(product): Observable<Product> {
    console.log(product);
    return this.httpClient.post<Product>(API_URL_PRODUCT, product);
  }

  findByIdProduct(id: number): Observable<Product> {
    return this.httpClient.get(`${API_URL_PRODUCT}/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    console.log(product);
    return this.httpClient.put<Product>(`${API_URL_PRODUCT}/${id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${API_URL_PRODUCT}/${id}`);
  }

}
