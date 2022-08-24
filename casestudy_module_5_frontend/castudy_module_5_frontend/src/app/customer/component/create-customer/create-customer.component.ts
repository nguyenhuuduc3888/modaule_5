import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private toastrService: ToastrService, private customerService: CustomerService, private customerTypeService: CustomerTypeService, private router: Router) {
  }

  customerForm = new FormGroup({
    id: new FormControl(),
    // tslint:disable-next-line:max-line-length
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]' +
      '[a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*' +
      '(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]' +
      '[a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$')]),
    customerType: new FormControl(),
    dateOfBirth: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^([0-9]{9}|[0-9]{12})$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|8490|8491)+([0-9]{7})$')]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    address: new FormControl()
  });

  customerTypeList: CustomerType[];

  submit() {
    const customer = this.customerForm.value;
    this.customerService.save(customer).subscribe(next => {
      this.customerForm.reset();
      this.router.navigate(['/customer/list']);
      this.toastrService.success('Them ok', ' ', {
        timeOut: 1500, progressBar: false
      });
    });
  }

  ngOnInit() {
    this.getAllCustomerType();
  }

  getAllCustomerType() {
    return this.customerTypeService.getAll().subscribe(type => {
      this.customerTypeList = type;
    });
  }

}
