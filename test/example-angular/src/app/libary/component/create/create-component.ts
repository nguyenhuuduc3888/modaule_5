import {Component, OnInit} from '@angular/core';
import {Patient} from '../../service/patient';
import {Router} from '@angular/router';
import {PeoplePatient} from '../../service/peoplePatient';
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
  constructor(private toastrService: ToastrService, private patientService: Patient, private router: Router, private peoplePatientService: PeoplePatient) {
  }

  patientForm = new FormGroup({
    id: new FormControl(),
    codePatient: new FormControl('', [Validators.required]),
    codePeoplePatient: new FormControl(),
    namePeoplePatient: new FormControl('', [Validators.required]),
    dayStart: new FormControl('', [Validators.required]),
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
      this.router.navigate(['/patient/list']);
      this.toastrService.success('Them moi thành công', ' ', {
        timeOut: 1500, progressBar: false
      });
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
