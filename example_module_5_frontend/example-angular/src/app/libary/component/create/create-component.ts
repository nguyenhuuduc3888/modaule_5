import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../service/patientService';
import {Router} from '@angular/router';
import {PeoplePatientService} from '../../service/peoplePatientService';
import {ToastrService} from 'ngx-toastr';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PatientPeople} from '../../model/patientPeople';

@Component({
  selector: 'app-create',
  templateUrl: './create-component.html',
  styleUrls: ['./create-component.css']
})
export class CreateComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private toastrService: ToastrService, private patientService: PatientService, private router: Router, private peoplePatientService: PeoplePatientService) {
  }

  patientForm = new FormGroup({
    id: new FormControl(),
    codePatient: new FormControl(),
    codePeoplePatient: new FormControl(),
    namePeoplePatient: new FormControl(),
    dayStart: new FormControl(),
    dayEnd: new FormControl(),
    reason: new FormControl(),
    method: new FormControl(),
    doctor: new FormControl(),
  });

  peoplePatientList: PatientPeople [];

  submit() {
    const patient = this.patientForm.value;
    this.patientService.save(patient).subscribe(() => {
      this.patientForm.reset();
      this.toastrService.success('Thêm mới thành công', ' ', {
        timeOut: 1500, progressBar: false
      });
      this.router.navigate(['/patient/list']);
    });
  }

  ngOnInit(): void {
    this.getAllPeoplePatient();
  }

  getAllPeoplePatient() {
    return this.peoplePatientService.getAllPeoplePatient().subscribe(peoplePatient => {
      this.peoplePatientList = peoplePatient;
    });
  }

}
