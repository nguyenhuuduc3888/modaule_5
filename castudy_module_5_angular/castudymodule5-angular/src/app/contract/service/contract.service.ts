import {Injectable} from '@angular/core';
import {Contract} from '../model/contract';
import {Customer} from '../../customer/model/customer';
import {Facility} from '../../facility/model/facility';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contractList: Contract[] = [
    {
      id: 1, facility: {id: 1, name: 'View biển'}, customer: {id: 1, name: 'Nguyễn Hữu Đức'},
      startDate: '12/02/2021', endDate: '11/03/2021', deposit: 5000000
    },
    {
      id: 2, facility: {id: 2, name: 'View Núi'}, customer: {id: 2, name: 'Nguyễn Hữu Phước'},
      startDate: '03/02/2022', endDate: '02/05/2021', deposit: 6000000
    },
    {
      id: 3, facility: {id: 3, name: 'View Xấu Òm'}, customer: {id: 3, name: 'Nguyễn Thị Út Quyền'},
      startDate: '10/09/2021', endDate: '18/06/2022', deposit: 7000000
    },
    {
      id: 4, facility: {id: 4, name: 'View Gió Mát'}, customer: {id: 4, name: 'Nguyễn Đoàn Hậu'},
      startDate: '05/06/2021', endDate: '21/09/2021', deposit: 8000000
    }
  ];

  getAll() {
    return this.contractList;
  }

  constructor() {
  }
}
