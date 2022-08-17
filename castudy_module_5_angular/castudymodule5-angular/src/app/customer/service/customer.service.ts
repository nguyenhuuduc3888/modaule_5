import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [
    {
      id: 1, customerType: {id: 1, name: 'Diamond'}, name: 'Nguyễn Hữu Đức',
      birthday: '13-09-1997', gender: 1, idCard: '184309497', phoneNumber: '0901234567', email: 'nguyenhuuduc@gmail.com', address: 'hà tĩnh'
    },
    {
      id: 2,
      customerType: {id: 2, name: 'Platinum'},
      name: 'Nguyễn Hữu Phước',
      birthday: '10-04-1994',
      gender: 1,
      idCard: '184309497',
      phoneNumber: '0901234567',
      email: 'nguyenhuuphuoc@gmail.com',
      address: 'hà tĩnh'
    },
    {
      id: 3,
      customerType: {id: 1, name: 'Gold'},
      name: 'Nguyễn Thị Út Quyền',
      birthday: '13-09-2000',
      gender: 0,
      idCard: '184309497',
      phoneNumber: '0901234567',
      email: 'nguyenthiutquyen@gmail.com',
      address: 'hà tĩnh'
    },
    {
      id: 4,
      customerType: {id: 1, name: 'Sliver'},
      name: 'Nguyễn Đoàn Hậu',
      birthday: '13-04-2004',
      gender: 1,
      idCard: '184309497',
      phoneNumber: '0901234567',
      email: 'nguyendoanhau@gmail.com',
      address: 'hà tĩnh'
    },
  ];

  getAll() {
    return this.customerList;
  }

  save(customer) {
    this.customerList.push(customer);
  }

  findById(id: number) {
    return this.customerList.find(customer => customer.id === id);
  }

  update(id: number, customer: Customer) {
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].id === id) {
        this.customerList[i] = customer;
      }
    }
  }

  delete(id: number) {
    this.customerList = this.customerList.filter(customer => {
      return customer.id !== id;
    });
  }

  constructor() {
  }
}
