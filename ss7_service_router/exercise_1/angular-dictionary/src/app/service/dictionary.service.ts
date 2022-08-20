import {Injectable} from '@angular/core';
import {Dictionary} from '../model/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  listDictionary: Dictionary[] = [
    {id: 1, name: 'Book', detail: 'Sach'},
    {id: 2, name: 'Computer', detail: 'May Tinh'},
    {id: 3, name: 'Card', detail: 'The'},
  ];

  constructor() {
  }

  getAll() {
    return this.listDictionary;
  }

  finById(id: number) {
    return this.listDictionary.find(d => d.id === id);
  }
}
