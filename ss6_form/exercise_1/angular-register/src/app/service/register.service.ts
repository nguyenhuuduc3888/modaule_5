import {Injectable} from '@angular/core';
import {Register} from '../model/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerList: Register[] = [
    {email: 'duc@gmail', pass: '123', confirmPass: '123', country: {id: 1, name: 'ha tinh'}, age: 25, gender: 1, phone: '01560000'},
    {email: 'hau@gmail', pass: '333', confirmPass: '333', country: {id: 2, name: 'da nang'}, age: 20, gender: 1, phone: '3686886'},

  ];

  constructor() {
  }

  getAll() {
    return this.registerList;
  }

  save(register) {
    this.registerList.push(register);
  }
}
