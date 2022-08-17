import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CountryService} from '../../service/country.service';
import {Country} from '../../model/country';
import {RegisterService} from '../../service/register.service';
import {Register} from '../../model/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private countryService: CountryService, private registerService: RegisterService) {
  }

  registersForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPass: new FormControl('', [Validators.required, Validators.minLength(6)]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.max(18)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
  });

  countryList: Country[];
  registerList: Register[];

  submit() {
    const registers = this.registersForm.value;
    this.registerService.save(registers);
    this.registersForm.reset();
  }

  ngOnInit() {
    this.countryList = this.countryService.getAll();
    this.registerList = this.registerService.getAll();
  }
}
