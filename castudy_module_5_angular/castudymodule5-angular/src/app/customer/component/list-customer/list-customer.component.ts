import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[] = [];
  searchName: string;
  idDelete: number;
  nameDelete: string;
  idCard: string;
  page = 1;

  constructor(private customerService: CustomerService, private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(customer => {
      this.customerList = customer;
    });
  }

  openDelete(customer: Customer) {
    this.idDelete = customer.id;
    this.nameDelete = customer.name;
    this.idCard = customer.idCard;
  }

  delete(id) {
    this.customerService.delete(id).subscribe(next => {
      this.toastrService.success('Xóa thành công', ' ', {
        timeOut: 1500, progressBar: false
      });
      this.ngOnInit();
    });
  }

  search(value: any) {
    this.customerService.findAll(this.searchName).subscribe(listSearch => {
      this.customerList = listSearch;
      this.page = 1;
    });
  }
}
