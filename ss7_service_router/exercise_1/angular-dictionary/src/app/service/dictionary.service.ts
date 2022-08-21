import {Injectable} from '@angular/core';
import {Dictionary} from '../model/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  listDictionary: Dictionary[] = [
    {id: 1, name: 'Book', detail: 'Sách'},
    {id: 2, name: 'Computer', detail: 'Máy Tính'},
    {id: 3, name: 'Card', detail: 'Thẻ'},
  ];

  constructor() {
  }

  getAllDictionary() {
    return this.listDictionary;
  }

  finByIdDetail(id: number) {
    return this.listDictionary.find(detail => detail.id === id);
  }
}
