import {CustomerType} from './customer-type';

export interface Customer {
  id?: number;
  customerType?: CustomerType;
  name?: string;
  dateOfBirth?: string;
  gender?: number;
  idCard?: string;
  phone?: string;
  email?: string;
  address?: string;
}
