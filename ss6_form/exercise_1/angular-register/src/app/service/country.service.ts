import {Injectable} from '@angular/core';
import {Country} from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  country: Country[] = [];

  constructor() {
    this.country = [
      {id: 1, name: 'ha tinh'},
      {id: 2, name: 'da nang'},
      {id: 3, name: 'sai gon'},
    ];
  }

  getAll() {
    return this.country;
  }
}
