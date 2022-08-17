import {Component, OnInit} from '@angular/core';
import {CustomerType} from '../../model/customer-type';
import {CustomerTypeService} from '../../service/customer-type.service';

@Component({
  selector: 'app-customer-type',
  templateUrl: './customer-type.component.html',
  styleUrls: ['./customer-type.component.css']
})
export class CustomerTypeComponent implements OnInit {
  customerTypeList: CustomerType[];

  constructor(private customerType: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.customerTypeList = this.customerType.getALL();
  }
}
