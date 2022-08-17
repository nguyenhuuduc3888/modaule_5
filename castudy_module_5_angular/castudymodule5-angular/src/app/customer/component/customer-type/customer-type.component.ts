import {Component, OnInit} from '@angular/core';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer-type',
  templateUrl: './customer-type.component.html',
  styleUrls: ['./customer-type.component.css']
})
export class CustomerTypeComponent implements OnInit {
  customerType: CustomerType[] = [
    {id: 1, name: 'Diamond'},
    {id: 2, name: 'Platinum'},
    {id: 3, name: 'Gold'},
    {id: 4, name: 'Sliver'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
