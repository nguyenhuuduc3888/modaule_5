import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[];

  private idDelete: number;
  private nameDelete: string;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerList = this.customerService.getAll();
  }

  openDelete(customer: Customer ) {
    this.idDelete = customer.id;
    this.nameDelete = customer.name;
  }

  delete(id) {
    this.customerService.delete(id);
    this.ngOnInit();
  }
}
