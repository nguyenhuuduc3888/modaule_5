import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerForm: FormGroup;
  id: number;
  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService,
              private customerTypeService: CustomerTypeService, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const customer = this.getCustomer(this.id);
      this.customerForm = new FormGroup({
        id: new FormControl(customer.id),
        // tslint:disable-next-line:max-line-length
        name: new FormControl(customer.name, [Validators.required, Validators.pattern('^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]' +
          '[a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*' +
          '(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]' +
          '[a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$')]),
        customerType: new FormControl(customer.customerType),
        birthday: new FormControl(customer.birthday),
        gender: new FormControl(customer.gender),
        idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern('^[0-9]{9}|[0-9]{12}$')]),
        phoneNumber: new FormControl(customer.phoneNumber, [Validators.required, Validators.pattern('^(090|091|8490|8491)+([0-9]{7})$')]),
        email: new FormControl(customer.email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        address: new FormControl(customer.address)

      });
    });
  }

  customerTypeList: CustomerType[];

  ngOnInit(): void {
    this.customerTypeList = this.customerTypeService.getALL();
  }

  private getCustomer(id: number) {
    return this.customerService.findById(id);
  }

  update(id: number) {
    const customer = this.customerForm.value;
    this.customerService.update(id, customer);
    this.router.navigate(['/customer/list']);
  }
}
