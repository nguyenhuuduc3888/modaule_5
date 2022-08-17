import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[] = [
    {
      id: 1, customerType: {id: 1, name: 'Diamond'}, name: 'Nguyễn Hữu Đức',
      birthday: '13/09/1997', gender: 0, idCard: '184309497', phoneNumber: '0901234567', email: 'nguyenhuuduc@gmail.com', address: 'hà tĩnh'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
