import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService, private router: Router) {
  }

  customerForm = new FormGroup({
    id: new FormControl(),
    // tslint:disable-next-line:max-line-length
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]' +
      '[a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*' +
      '(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]' +
      '[a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$')]),
    customerType: new FormControl(),
    birthday: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}|[0-9]{12}$')]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^(090|091|8490|8491)+([0-9]{7})$')]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    address: new FormControl()
  });

  customerTypeList: CustomerType[];

  submit() {
    const customer = this.customerForm.value;
    this.customerService.save(customer);
    this.customerForm.reset();
    this.router.navigate(['/list-customer']);
  }

  ngOnInit(): void {
    this.customerTypeList = this.customerTypeService.getALL();
  }

}
