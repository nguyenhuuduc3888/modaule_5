import {Country} from './country';

export interface Register {
  email?: string;
  pass?: string;
  confirmPass?: string;
  country?: Country;
  age?: number;
  gender?: number;
  phone?: string;
}
