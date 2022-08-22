import {Component, OnInit} from '@angular/core';
import {ContractService} from '../../service/contract.service';
import {CustomerService} from '../../../customer/service/customer.service';
import {FacilityService} from '../../../facility/service/facility.service';
import {Customer} from '../../../customer/model/customer';
import {Facility} from '../../../facility/model/facility';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  contractForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    deposit: new FormControl('', [Validators.required, Validators.pattern('/^\\d+$/')]),
    total: new FormControl('', [Validators.required]),
    customer: new FormControl('', [Validators.required]),
    facility: new FormControl('', [Validators.required]),
  });


  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private contractService: ContractService, private customerService: CustomerService, private facilityService: FacilityService) {
  }

  customerList: Customer[];
  facilityList: Facility[];

  submit() {
    const contract = this.contractForm.value;
    this.contractService.save(contract);
    this.contractForm.reset();
    this.router.navigate(['/contract/list']);

  }

  ngOnInit(): void {
    this.customerList = this.customerService.getAll();
    this.facilityList = this.facilityService.getAll();
  }

}
